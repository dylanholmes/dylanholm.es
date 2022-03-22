import React from "react";
import * as ts from "typescript";
import CodeBlock from "../../../components/code-block"
import FunctionCodeBlock from "../../../components/code/FunctionCodeBlock"
import FunctionProvider from "../../../components/code/FunctionProvider"
import PropTypes from 'prop-types';
import FunctionContext from '../../../components/code/FunctionContext';
import FunctionLogger from '../../../components/code/FunctionLogger';
import FunctionEditor from '../../../components/code/FunctionEditor';


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
    const code = `
function step(v: number = 23) {
  return {state: v};
}

function foo(v: number  = 24) {
  return v;
}
`;



    return (
      <>

        <FunctionProvider language="ts" code={code} exports={['step', 'foo']} transformCode={tsCompile}>
          <FunctionEditor />
          <FunctionLogger />
        </FunctionProvider>
      </>
    );
  }
}
