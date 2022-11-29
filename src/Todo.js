import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_todo_success , add_todo_started, add_todo_failure,delete_todo,update_todo } from "./Action/Action";
export const Todo = () => {
  const [inputval, setInputval] = useState("");
  const output = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const InputHandler = (e) => {
    setInputval(e.target.value);
  };
  const SubmitHandler = () => {
    
    console.log(dispatch(add_todo_started())); 
      fetch('https://dummyjson.com/todos/add'
     ,{
     method:'post',
     headers:{ 'Content-Type': 'application/json'},
      body: JSON.stringify({
      todo: inputval,
      completed: false,
      userId: 5,
    })
  }
  )
  .then(res =>res.json())
  .then((res1)=>
  {
    dispatch(add_todo_success(res1.todo))
  })
  .catch(error => {
    dispatch(add_todo_failure())
})
setInputval("")
  };
  const DeleteHandler=(id)=>{
    fetch('https://dummyjson.com/users/5', {
    method: 'DELETE',
    })
   .then(res => res.json())
   dispatch(delete_todo(id))
  }
  return (
    <div>
      Todo
      <div class="buttonIn">
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
        <div className="OutPut">
         <p>
          <b><input type="checkbox" onClick={()=>dispatch(update_todo())} /></b>
          <b>{item.inputval}</b>
          <button className="Delete" onClick={()=>DeleteHandler(item.id)}>Delete</button>
          </p> 
        </div>
      ))}
    </div>
  );
};
