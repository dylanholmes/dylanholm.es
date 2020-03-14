import Link from 'next/link'
import { siteMeta } from '../../blog.config'
import Layout from './default'
import PublishedAt from '../utils/published-at'
import blogposts from '../../posts/index'
import NextPrevPost from '../next-prev-post'
import { InlineMath, BlockMath } from 'react-katex';
import {MDXProvider} from '@mdx-js/react'
import Unity from '../shortcodes/unity'
import CodeBlock from '../code-block'
const components = {
  code: CodeBlock,
  InlineMath,
  BlockMath,
  Unity
}

function BlogPost({ path, meta, children }) {
  const currentPostIndex = blogposts
    .map(({ title }) => title)
    .indexOf(meta.title)
  const previousPost = blogposts[currentPostIndex + 1]
  const nextPost = blogposts[currentPostIndex - 1]

  return (
    <Layout pageTitle={meta.title} ogImage={meta.image}>
      <article className="h-entry">
        <header>
          <h1 className="p-name">{meta.title}</h1>

          <div>
            <PublishedAt date={meta.publishedAt} />
          </div>
        </header>
        <div className="e-content"><MDXProvider components={components}>{children}</MDXProvider></div>
        <footer>
          {(previousPost || nextPost) && (
            <div className="post-pagination">
              {previousPost && (
                <NextPrevPost
                  title={previousPost.title}
                  path={previousPost.path}
                  position="previous"
                />
              )}
              {nextPost && (
                <NextPrevPost
                  title={nextPost.title}
                  path={nextPost.path}
                  position="next"
                />
              )}
            </div>
          )}
        </footer>
      </article>
      <style jsx>{`
        header {
          margin-bottom: 2em;
        }

        [rel='author'] {
          margin-left: 1em;
        }

        article {
          margin-bottom: 2em;
        }

        footer {
          margin-top: 2em;
        }

        .post-pagination {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
      `}</style>
    </Layout>
  )
}

export default BlogPost
