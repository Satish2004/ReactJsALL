import React, { useState } from "react";
import "./App.css";

const TodoList = () => {
  let [AddTodo, setAddTodo] = useState([""]);
  let [newTodo, setnewTodo] = useState(""); // new array add ho jayga pichle wale me

  let UpdateAddButton = () => {
    setAddTodo([...AddTodo, newTodo]);
    setnewTodo("");
  };
  let handleOnChangeInput = (e) => {
    setnewTodo(e.target.value);
  };

  //when  we take onChange event also take value={}
  return (
    <>
      <h1>TODO LIST</h1>
      <p>Create Your Own Todo List</p>
      <input
        type="text"
        placeholder="ENTER YOUR TODO ...."
        value={newTodo}
        onChange={handleOnChangeInput}
      />
      <button onClick={UpdateAddButton}>ADD</button>
      <ul>
        {AddTodo.map((todo) => (
          <div>
            <li>{todo}</li>
           
          </div>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
