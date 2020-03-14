import Link from 'next/link'
import { siteMeta } from '../blog.config'

const Title = ({ path }) => (
  <>
    {path === '/' ? (
      <h1>
        
        <Link href={siteMeta.siteUrl}>
          <a rel="me">{siteMeta.title}</a>
        </Link>
      </h1>
    ) : (
      <p>
        <Link href="/">
          <a rel="me">{siteMeta.title}</a>
        </Link>
      </p>
    )}
    <style jsx>{`
      h1 {
        margin: 0;
        // margin-bottom: 1rem;
        // padding-top: 0;
        margin-bottom: 0;
        font-size: 1em;
        line-height: 1.5;
      }


      p {
        margin: 0;
        font-size: 1em;
        line-height: 1.5;
      }
    `}</style>
  </>
)

export default Title
