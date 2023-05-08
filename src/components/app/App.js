import React, { useState } from 'react';
import Editor from '../Editor';

function App() {
  const [html, setHtml] = useState("")
  const [js, setJs] = useState("")
  const [css, setCss] = useState("")
  return (
    <>
      <div className='pane top-pane'>
        <Editor 
          language="html"
          displayName="HTML "
          value={html}
          onChange={setHtml}
        />

        <Editor 
          language="css"
          displayName="CSS "
          value={css}
          onChange={setCss}
        />

        <Editor 
          language="javascript"
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
