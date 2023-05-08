import React, { useState } from 'react';
import Editor from '../Editor';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';

function App() {
  const [codeHtml, setHtml] = useState("")
  const [js, setJs] = useState("")
  const [codeCss, setCss] = useState("")
  return (
    <>
      <div className='pane top-pane'>
        <Editor 
          language={html()}
          displayName="HTML "
          value={codeHtml}
          onChange={setHtml}
        />

        <Editor 
          language={css()}
          displayName="CSS "
          value={codeCss}
          onChange={setCss}
        />

        <Editor 
          language={javascript()}
          displayName="JS "
          value={js}
          onChange={setJs}
        />
        
      </div>

      <div className='pane'>
        <iframe
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
