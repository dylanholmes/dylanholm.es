const remarkMath = require('remark-math')
const rehypeKatex = require('rehype-katex')

// use fleqn

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }
})

const mdx_options = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx', 'md']
});

const options = {
  // devIndicators: {
  //   autoPrerender: false,
  // }
}

module.exports = Object.assign({}, options, mdx_options);
