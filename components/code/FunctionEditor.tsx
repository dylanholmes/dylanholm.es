import React, { useContext } from 'react';
import FunctionContext from './FunctionContext';
import Editor from './Editor';

export default function FunctionEditor(props) {
  const { code, language, theme, disabled, onChange } = useContext(FunctionContext);

  return (
    <Editor
      theme={theme}
      code={code}
      language={language}
      disabled={disabled}
      onChange={onChange}
      {...props}
    />
  );
}
