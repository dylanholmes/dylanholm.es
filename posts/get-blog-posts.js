const fs = require('fs')
const path = require('path')


function getPostPaths(dir) {
  return [
    getSingleFilePosts(dir),
    getMultiFilePosts(dir)
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
    .readdirSync(dir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .map(subDirName => path.resolve(dir, subDirName))
    .flatMap(subDirPath =>
      fs.readdirSync(subDirPath)
        .filter(fileName => fileName === 'index.md' || fileName === 'index.mdx')
        .map(fileName => path.resolve(subDirPath, fileName))
    );
}

const DIR = path.join(process.cwd(), '/pages/posts/');
const META = /export\s+const\s+meta\s+=\s+({[\s\S]*?\n})/

module.exports = getPostPaths(DIR)
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
      path: '/posts/' + path
        .replace(DIR, '')
        .replace(/\.mdx?$/, '')
        .replace(/\/index$/, ''),
      index,
    }
  })
  .filter(meta => meta.published)
  .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
