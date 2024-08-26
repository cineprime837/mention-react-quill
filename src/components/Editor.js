import React from 'react'

const Editor = () => {

    // const handleOnChange = (content, delta, source, editor) => {
    //     const cursorPosition = editor.getSelection()?.index;
    //     const textBeforeCursor = editor.getText(0, cursorPosition);
    
    
    //     // Check if the last inserted character is '@'
    //     if (textBeforeCursor.endsWith("@")) {
    //       setCursorPositoion(cursorPosition+1)
    //       // console.log("cursorPosition", input[cursorPosition+1])
    //       const { top, left } = editor.getBounds(cursorPosition);
    //       setPopupPosition({ top: top + 50, left }); // Adjust position as needed
    //       setShowPopup(true);
    //     }
    
    //     setInput(content);
    //     // if(value.ops[value.ops.length-1] laptop laptop laptop laptop laptop laptop laptop eeroju hello where are you Vijay yeah Beyoncé hide Play Chris.insert == "@"){
    //     //   console.log("start insert @")
    //     // }
    //   };
    
    //   const handleSelectOption = (option) => {
    //     setShowPopup(false);
    
    //     // Insert the selected option at the cursor position
    //     const quillEditor = document.querySelector(".ql-editor");
    //     // const cursorPosition = quillEditor.selectionStart;
    //     const textBeforeCursor = input.slice(0, cursorPos + 1); // remove '@'
    //     const textAfterCursor = input.slice(cursorPos);
    //     const lastTag = textAfterCursor.slice(2)
    
    //     console.log("cursorPosition",cursorPos)
    
    //     const newValue = `${textBeforeCursor}${`<a href=${`something`}>@${option}</a>`}${lastTag}`;
    //     console.log(newValue)
    //     setInput(newValue);
    //   };
  return (
    <div>Editor</div>
  )
}

export default Editor