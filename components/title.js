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
        margin-top: 0;
        margin-bottom: 1rem;
        padding-top: 0;
        font-size: 1.3em;
        font-weight: bold;
        line-height: 1.5;
      }

      a {
        color: #333;
        text-decoration: none;
      }

      p {
        font-size: 1.3em;
        font-weight: bold;
      }
    `}</style>
  </>
)

export default Title
