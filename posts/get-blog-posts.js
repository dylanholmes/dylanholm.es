const fs = require('fs')
const path = require('path')


function getPostPaths() {
  const DIR = path.join(process.cwd(), '/pages/posts/');
  return [
    getSingleFilePosts(DIR),
    getMultiFilePosts(DIR)
  ]
    .flatMap(postPaths => postPaths);
}
function getSingleFilePosts(dir) {
  return fs
    .readdirSync(dir)
    .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))
    .map(file => path.resolve(dir, file));
}

function getMultiFilePosts(dir) {
  return fs
    .readdirSync(dir)
    .filter(file => fs.statSync(path.resolve(dir, file)).isDirectory())
    .flatMap(subdir =>
      fs.readdirSync(subdir)
        .filter(file => file === 'index.md' || file === 'index.mdx')
        .map(file => path.resolve(dir, subdir, file))
    );
}

const META = /export\s+const\s+meta\s+=\s+({[\s\S]*?\n})/

module.exports = postPaths
  .map((path, index) => {
    const contents = fs.readFileSync(path, 'utf-8')
    const match = META.exec(contents)

    if (!match || typeof match[1] !== 'string') {
      throw new Error(`${path} needs to export const meta = {}`)
    }

    // eslint-disable-next-line no-eval
    const meta = eval('(' + match[1] + ')')

    return {
      ...meta,
      path: path.replace(/\.mdx?$/, '').replace('/pages', ''),
      index,
    }
  })
  .filter(meta => meta.published)
  .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
