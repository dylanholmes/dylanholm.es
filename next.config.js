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

const withWorker = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      config.module.rules.push({
        test: /\.worker\.js$/,
        loader: 'worker-loader',
        // options: { inline: true }, // also works
        options: {
          filename: 'static/[hash].worker.js',
          publicPath: '/_next/',
        },
      })

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    },
  })
}

console.log('--------- next.config.js --------- ')

let options = {
  pageExtensions: ['js', 'jsx', 'mdx', 'md']
  // devIndicators: {
  //   autoPrerender: false,
  // }
}
console.log(Object.keys(options))
options = withMDX(options);
console.log(Object.keys(options))
options = withWorker(options);
console.log(Object.keys(options))

module.exports = options;

console.log('--------- --------------  --------- ')
// module.exports = {
//   ...options,
//   ...mdx_options,
//   // webpack: (config, options) => {
//   //   config.module.rules.push({
//   //     test: /\.worker\.js$/,
//   //     loader: 'worker-loader',
//   //     // options: { inline: true }, // also works
//   //     options: {
//   //       name: 'static/[hash].worker.js',
//   //       publicPath: '/_next/',
//   //     },
//   //   });
//   //   return config
//   // }
// }