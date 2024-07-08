import './App.scss';
import React, { useState } from 'react';
import Editor from './components/editor';
import Previewer from './components/previewer';

const exampleMarkdown = `
# Type markdown on the editor and preview it!
## This is a sub-header
There's also [links](https://www.freecodecamp.org)
  
Here's some code between 2 backticks: \`<div></div>\`  
- list 1
- list 2
- list 3

> This is a Block Quote!

\`\`\`
Here's a code block:

let x = 1;
let y = 2;
let z = x + y;
\`\`\`
  
**bold text!**
  
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  const [input, setInput] = useState(exampleMarkdown);

  const inputHandler = event => {
    setInput(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Editor inputHandler={inputHandler} defaultText={exampleMarkdown}/>
        <Previewer input={input}/>
      </header>
    </div>
  );
}

export default App;
