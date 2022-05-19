import React from "react";

export default function Todolist(props) {
  return (
    <>
      <i
        className="fa fa-trash"
        aria-hidden="true"
        style={{ color: "red" }}
        onClick={() => {
          props.onSelect(props.id);
        }}
      ></i>
      <li>{props.text}</li>
    </>
  );
}
