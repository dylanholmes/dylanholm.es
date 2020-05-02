import Layout from './default'

function Page({ path, meta, children }) {
  return (
    <Layout pageTitle={meta.title}>
      <article>
        <header>
          {/* <h1>{meta.title}</h1> */}
          <h1>{path}</h1>
        </header>
        <div>{children}</div>
      </article>
      <style jsx>{`
        header {
          margin-bottom: 2em;
        }
      `}</style>
    </Layout>
  )
}

export default Page
