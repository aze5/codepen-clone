import React from 'react'
import CodeMirror from '@uiw/react-codemirror';

import { sublime } from '@uiw/codemirror-theme-sublime';
import { EditorView } from '@codemirror/view';

export default function Editor(props) {
  const {
    displayName,
    language,
    onChange,
    value
  } = props

  function handleChange(value, viewUpdate) {
    onChange(value)
  }

  return (
    <div className="editor-container">
      <div className="editor-title">
        {displayName}
        <button>O/C</button>
      </div>
      <CodeMirror 
        onChange={handleChange}
        value={value}
        height='200px'
        className='codemirror-wrapper'
        extensions={[language, EditorView.lineWrapping]}
        theme="dark"
      />
    </div>
  )
}

