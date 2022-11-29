const ADD_TODO_STARTED="ADD_TODO_STARTED"
const ADD_TODO_SUCCESS="ADD_TODO_SUCCESS"
const ADD_TODO_FAILURE="ADD_TODO_FAILURE"
const DELETE_TODO="DELETE_TODO"
export const add_todo_success=(inputval)=>{
    return {
        type:"ADD_TODO_SUCCESS",
        payload:{
            id:Math.random(),
            inputval:inputval,
        }
    }
}
export const add_todo_started=(inputval)=>{
    return {
        type:"ADD_TODO_STARTED",
    }
}
export const add_todo_failure=()=>{
    return{
        type:"ADD_TODO_FAILURE"
    }
      
}
export const delete_todo=(id)=>{
  return {
    type:"DELETE_TODO",
    id
  }
}
export const update_todo=(id)=>{
    return {
        type:"UPDATE_TODO",
        id
    }
}
