import React, { useState, useEffect } from 'react';
import Editor from '../Editor';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';

function App() {
  const [codeHtml, setHtml] = useState("")
  const [codeCss, setCss] = useState("")
  const [js, setJs] = useState("")
  const [srcDoc, setSrcDoc] = useState("")



  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${codeHtml}</body>
        <style>${codeCss}</style>
        <script>${js}</script>
      </html>
    `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [codeHtml, codeCss, js])

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
          srcDoc={srcDoc}
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
