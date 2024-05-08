import React, { useRef, useState } from "react";
import "./Editor.css";

export default function Editor({onCreate}) {
  const [contents, setContents] = useState("")
  const contentRef = useRef()

  const onChangeContent = (e) => {
    setContents(e.target.value)
  }

  const onKeyDown = (e) => {
    if(e.keyCode === 13){
      onSubmit()
    }
  }

  const onSubmit = () => {
    if(contents === ""){
      contentRef.current.focus();
      return;
    }
    onCreate(contents);
    setContents("")
  }
  return (
    <div className="Editor">
      <input ref={contentRef} value={contents} onKeyDown={onKeyDown}onChange={onChangeContent}placeholder="새로운 Todo..." />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}
