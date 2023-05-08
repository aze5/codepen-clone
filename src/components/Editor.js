import React, { useReducer, useState } from 'react'
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

  const [open, setOpen] = useState(true)

  function handleChange(value, viewUpdate) {
    onChange(value)
  }

  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <button onClick={() => setOpen(prevOpen => !prevOpen)}>O/C</button>
      </div>
      <CodeMirror 
        onChange={handleChange}
        value={value}
        height="310px"
        className='codemirror-wrapper'
        extensions={[language, EditorView.lineWrapping]}
        theme={sublime}
      />
    </div>
  )
}

