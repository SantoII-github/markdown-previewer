import { marked } from 'marked';
import DOMPurify from 'dompurify';

function Previewer(props) {
  const html = marked.parse(props.input, {breaks: true});
  const cleanHTML = {__html: DOMPurify.sanitize(html)};;

    return (
      <div className="previewer">
        <div className="toolbar">Previewer</div>
        <div className="textbox" id="preview" dangerouslySetInnerHTML={cleanHTML}></div>
      </div>
    );
  }

export default Previewer