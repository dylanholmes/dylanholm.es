// import App from 'next/app'

// Apply global stylesheets; must be done in this file.
// Docs: https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet
import 'katex/dist/katex.min.css';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default App