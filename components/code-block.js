import React from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'

// Impor the theme we want.
import theme from 'prism-react-renderer/themes/github'

// Add prismjs themes that are included with prism-react-renderer by default.
// Source: https://github.com/FormidableLabs/prism-react-renderer/issues/53
import Prism from "prism-react-renderer/prism";
(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-csharp");

const CodeBlock = ({children, className}) => {
  const language = className.replace(/language-/, '')
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={theme}
    >
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={{...style, padding: '20px'}}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock