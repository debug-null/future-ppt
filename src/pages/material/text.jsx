import React, { useState, forwardRef } from "react";
const Text = (props, ref) => {
  console.log("🚀 ~ file: text.jsx ~ line 3 ~ Text ~ rops, ref", props, ref);
  const [canEdit, setCanEdit] = useState(false);
  const textRef = React.createRef();

  const handleClick = () => {
    setCanEdit(true);
    _allSelectText(textRef.current);
  };

  const handleBlur = (events) => {
    console.log("🚀 ~ file: text.jsx ~ line 10 ~ handleBlur ~ events", events.target.innerHTML);
  };

  const handleInput = (events) => {
    console.log("🚀 ~ file: text.jsx ~ line 13 ~ handleInput ~ events", events.target);
  };

  const handleMouseEnter = (events) => {
    console.log("🚀 ~ file: text.jsx ~ line 21 ~ handleMouseEnter ~ events", events);
  };
  const handleMouseOut = (events) => {
    console.log("🚀 ~ file: text.jsx ~ line 21 ~ handleMouseOut ~ events", events);
  };

  handleMouseOut;

  // 全选
  const _allSelectText = (element) => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  return (
    <div className="wl-block material-text" ref={ref} style={{ width: "600px", marginLeft: "1px", left: props.data.left, top: props.data.top }} onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}>
      <div className="text" suppressContentEditableWarning contentEditable={true} onDoubleClick={handleClick} onBlur={handleBlur} onInput={handleInput} ref={textRef}>
        {props.data.content}
      </div>
    </div>
  );
};
export default forwardRef(Text);
