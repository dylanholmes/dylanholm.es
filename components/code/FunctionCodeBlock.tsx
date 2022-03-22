import React from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live'
import FunctionProvider from './FunctionProvider';
import FunctionEditor from './FunctionEditor';
import FunctionLogger from './FunctionLogger';
import * as ts from "typescript";

// Impor the theme we want.
import theme from 'prism-react-renderer/themes/github'

// Add prismjs themes that are included with prism-react-renderer by default.
// Source: https://github.com/FormidableLabs/prism-react-renderer/issues/53
import Prism from "prism-react-renderer/prism";
(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-csharp");

function tsCompile(source: string, options: ts.TranspileOptions = null): string {
    // Default options -- you could also perform a merge, or use the project tsconfig.json
    if (null === options) {
        options = { compilerOptions: { module: ts.ModuleKind.CommonJS }};
    }
    return ts.transpileModule(source, options).outputText;
}

const FunctionCodeBlock = ({children, className, live}) => {
  const language = className.replace(/language-/, '')

  if (live) {
    let transformCode = null;
    if (language === 'ts' || language === 'typescript') {
      transformCode = tsCompile;
    }

    return (
      <div style={{marginTop: '40px'}}>
        <FunctionProvider language={language} code={children} transformCode={transformCode}>
          <FunctionEditor />
          <FunctionLogger />
        </FunctionProvider>
      </div>
    )
  }

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

export default FunctionCodeBlock
