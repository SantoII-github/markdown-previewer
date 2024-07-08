

function Editor(props) {
    return (
      <div className="editor">
        <div className="toolbar">Editor</div>
        <textarea className="textbox" name="markdown-input" onChange={props.inputHandler} id="editor">{props.defaultText}</textarea>
      </div>
    );
  }

export default Editor