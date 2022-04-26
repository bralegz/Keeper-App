import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={props.addNote} value={props.titleValue}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={props.addNote} value={props.textAreaValue}/>
        <button onClick={props.clickHandler}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
