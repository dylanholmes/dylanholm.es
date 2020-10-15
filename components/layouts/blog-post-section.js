import Layout from './default'
import Container from '../container'
import Style from '../style'
import blogposts from '../../posts/index'
import NextPrevPost from '../next-prev-post'
import {MDXProvider} from '@mdx-js/react'
import Anchor from '../shortcodes/anchor'
import Unity from '../shortcodes/unity'
import CodeBlock from '../code-block'
const components = {
  Anchor,
  code: CodeBlock,
  Unity
}

function BlogPostSection({ isSection, path, meta, children }) {
  const currentPostIndex = blogposts
    .map(({ title }) => title)
    .indexOf(meta.title)
  const previousPost = blogposts[currentPostIndex + 1]
  const nextPost = blogposts[currentPostIndex - 1]
  console.log(path);
  console.log(isSection);

  if (!isSection) {
    return (
      <Container>
        <Style/>
        <main>{children}</main>
      </Container>
    )
  } else {
    return (
      <main>{children}</main>
    )
  }
}

export default BlogPostSection
