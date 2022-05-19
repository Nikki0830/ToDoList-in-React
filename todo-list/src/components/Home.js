import React from "react";
import { useState } from "react";
import Todolist from "./Todolist.js";
import "./Home.css"

export default function Home() {
  const [todoList, setTodoList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setTodoList(event.target.value);
  };

  const findTodo = () => {
    setItems((oldItems) => {
      return [...oldItems, todoList];
    });
    setTodoList("");
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
         return index !== id
      })
    })
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>ToDo List</h1>
          <input
            type="text"
            placeholder="Add your item"
            value={todoList}
            onChange={itemEvent}
          ></input>
          <button onClick={findTodo}> + </button>
          <ol className = "content">
            {items.map((itemval, index) => {
              return (
                <Todolist
                  text={itemval}
                  key={index}
                  id={index}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
