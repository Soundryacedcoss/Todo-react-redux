import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import method from action
import {
  add_todo_success,
  add_todo_started,
  add_todo_failure,
  delete_todo,
  update_todo,
} from "./Action/Action";
export const Todo = () => {
  // state for input value
  const [inputval, setInputval] = useState("");
  const output = useSelector((state) => state.list);
  const dispatch = useDispatch();
  // taking value from states
  const InputHandler = (e) => {
    setInputval(e.target.value);
  };
  // Functinality for adding todo
  const SubmitHandler = () => {
   if(inputval===""){
    alert("Please write something")
   }
   else{
    dispatch(add_todo_started())
    fetch("https://dummyjson.com/todos/add", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo: inputval,
        completed: false,
        userId: 5,
      }),
    })
      .then((res) => res.json())
      .then((res1) => {
        dispatch(add_todo_success(res1.todo));
      })
      .catch((error) => {
        dispatch(add_todo_failure());
      });
   }
    setInputval("");
  };
  // functinality for delete todo
  const DeleteHandler = (id) => {
    fetch("https://dummyjson.com/users/5", {
      method: "DELETE",
    }).then((res) => res.json());
    dispatch(delete_todo(id));
  };
  return (
    <div>
      Todo
      <div className="buttonIn">
        <input
          type="text"
          id="enter"
          value={inputval}
          placeholder="Add Todo.."
          onChange={InputHandler}
        />
        <button id="clear" onClick={SubmitHandler}>
          Submit
        </button>
      </div>
      {output.map((item) => (
        <div className="OutPut" key={Math.random()} >
          <p>
            <b>
              <input type="checkbox" onClick={() => dispatch(update_todo())} />
            </b>
            <b >{item.inputval}</b>
            <button className="Delete" onClick={() => DeleteHandler(item.id)}>
              Delete
            </button>
          </p>
        </div>
      ))}
    </div>
  );
};
