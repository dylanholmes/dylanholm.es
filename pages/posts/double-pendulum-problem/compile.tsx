import React from "react";
import * as ts from "typescript";
import CodeBlock from "../../../components/code-block"


export default class Compile extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    function tsCompile(source: string, options: ts.TranspileOptions = null): string {
        // Default options -- you could also perform a merge, or use the project tsconfig.json
        if (null === options) {
            options = { compilerOptions: { module: ts.ModuleKind.CommonJS }};
        }
        return ts.transpileModule(source, options).outputText;
    }

    // Make sure it works
    const source = "let foo: string  = 'bar'";

    let result = tsCompile(source);

    console.log(result); // var foo = 'bar';

    return (
      <>
        <CodeBlock className="language-ts" live={true}>
          { source }
        </CodeBlock>
      </>
    );
  }
}
