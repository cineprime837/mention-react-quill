import { useRef, useState } from "react";
import "./App.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Quill = ReactQuill.Quill;
function App() {
  const [value, setValue] = useState("");
  const quillRef = useRef(null);
  const [cursor, setCursor] = useState(0);
  const [cursorActive, setCursorActive] = useState(false);
  const [popupPosition, setPopupPosition] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const handleSetValue = (content, delta, source, editor) => {
    // setValue(content)
    // const cursorPosition = editor.getSelection()?.index;
    // if(delta.ops[delta.ops.length-1].insert == '@'){
    //   console.log("insert", )
    // }
    // if(content.includes(" @")){

    //   const index = content.indexOf(" @")
    //   const textBefore = content.split(" @");
    //   const newContent= ` <a href="https://google.com" target="__blank">kiran kumar</a>`;
    //   const textAfter = `${textBefore[0]}${newContent}${textBefore[1]}`;
    //   setValue(textAfter);
    //   console.log(Quill)
    // }
    const cursorPosition = editor.getSelection()?.index || 0;

    if (cursorPosition !== undefined && cursorPosition > 0) {
      const currentText = editor.getText();
      const lastChar = currentText[cursorPosition - 1];
     
      if (content.includes(" @")) {
        const { top, left } = editor.getBounds(cursorPosition);
              setPopupPosition({ top: top + 50, left }); // Adjust position as needed
              setShowPopup(true);
        const textBefore = content.split(" @");
        const newContent = ` <a href="https://google.com" target="__blank">kiran kumar</a>`;
        const textAfter = `${textBefore[0]}${newContent}${textBefore[1]}`;
        setValue(textAfter);
        setTimeout(() => {
          const quill = quillRef.current.getEditor();
          quill.setSelection(cursorPosition + 10); // Adjust cursor position
        }, 0);
      
    } else {
      setValue(content);
    }
  }

  // if (content.includes(" @")) {
  //   const index = content.indexOf(" @");
  //   const textBefore = content.slice(0, index + 1);
  //   const textAfter = content.slice(index + 2);

  //   const mentionHTML = ` <a href="https://google.com" target="__blank">kiran kumar</a>`;

  //   // Akram bro1

  //   console.log(index)

  //   // Set the cursor position right after the mention
  //   setTimeout(() => {
  //     const quill = quillRef.current.getEditor();
  //     quill.setSelection(cursorPosition + 10); // Adjust cursor position
  //   }, 0);
  // } else {
  //   setValue(content);
  // } 
};




return (
  <>
    <div className="main">
      <div className="editor">
        <ReactQuill theme="snow" ref={quillRef} value={value} onChange={handleSetValue} />
      </div>
      {
        value ?
          <div className="html"
            dangerouslySetInnerHTML={{ __html: value }}
          /> : ''
      }
    </div>
  </>
);
}

export default App;
