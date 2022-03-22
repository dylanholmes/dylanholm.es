import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Editor from 'react-simple-code-editor';
import Highlight, { Prism } from 'prism-react-renderer';
// import { theme as liveTheme } from '../../constants/theme';

export const liveTheme = {
  plain: {
    color: '#C5C8C6',
    backgroundColor: '#1D1F21'
  },
  styles: [
    {
      types: ['prolog', 'comment', 'doctype', 'cdata'],
      style: {
        color: 'hsl(30, 20%, 50%)'
      }
    },
    {
      types: ['property', 'tag', 'boolean', 'number', 'constant', 'symbol'],
      style: { color: 'hsl(350, 40%, 70%)' }
    },
    {
      types: ['attr-name', 'string', 'char', 'builtin', 'insterted'],
      style: {
        color: 'hsl(75, 70%, 60%)'
      }
    },
    {
      types: [
        'operator',
        'entity',
        'url',
        'string',
        'variable',
        'language-css'
      ],
      style: {
        color: 'hsl(40, 90%, 60%)'
      }
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgb(255, 85, 85)'
      }
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic'
      }
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold'
      }
    },
    {
      types: ['regex', 'important'],
      style: {
        color: '#e90'
      }
    },
    {
      types: ['atrule', 'attr-value', 'keyword'],
      style: {
        color: 'hsl(350, 40%, 70%)'
      }
    },
    {
      types: ['punctuation', 'symbol'],
      style: {
        opacity: '0.7'
      }
    }
  ]
};

const CodeEditor = props => {
  const [state, setState] = useState({
    code: props.code || ''
  });

  useEffect(() => {
    if (state.prevCodeProp && props.code !== state.prevCodeProp) {
      setState({ code: props.code, prevCodeProp: props.code });
    }
  }, [props.code]);

  const updateContent = code => {
    setState({ code });
  };

  useEffect(() => {
    if (props.onChange) {
      props.onChange(state.code);
    }
  }, [state.code]);

  const highlightCode = code => (
    <Highlight
      Prism={Prism}
      code={code}
      theme={props.theme || liveTheme}
      language={props.language}
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <Fragment>
          {tokens.map((line, i) => (
            // eslint-disable-next-line react/jsx-key
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                // eslint-disable-next-line react/jsx-key
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Fragment>
      )}
    </Highlight>
  );

  // eslint-disable-next-line no-unused-vars
  const { style, theme, onChange, ...rest } = props;
  const { code } = state;

  const baseTheme = theme && typeof theme.plain === 'object' ? theme.plain : {};

  return (
    <Editor
      value={code}
      padding={10}
      highlight={highlightCode}
      onValueChange={updateContent}
      style={{
        whiteSpace: 'pre',
        fontFamily: 'monospace',
        ...baseTheme,
        ...style
      }}
      {...rest}
    />
  );
};

CodeEditor.propTypes = {
  code: PropTypes.string,
  disabled: PropTypes.bool,
  language: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
  theme: PropTypes.object
};

export default CodeEditor;
