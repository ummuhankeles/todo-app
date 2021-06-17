import React from "react";
import "./TodoItem.css";
import { useState } from "react";

function Todo(props) {
  const { content, id } = props;
  const [isDone, setIsDone] = useState(false);

  const styles = {
    textDecoration: isDone ? "line-through" : "", 
    fontStyle: isDone ? "italic" : ""};

  const toggleIsDone = () => setIsDone(!isDone);
  return (
        <div style={styles} onClick={toggleIsDone}>
          {content}
        <button className="btn btn-outline-danger" 
        onClick={() => props.onDelete(id)}
        >Sil</button>
        </div>
        )
}

export default Todo;