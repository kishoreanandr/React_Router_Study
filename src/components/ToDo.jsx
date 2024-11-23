import { useReducer } from "react";

const [toDo,dispatch]=useReducer(reducer,initialState);
const handleChange=(e)=>{
    if(e.key==="Enter"){
        
    }
}
export const ToDo=()=>{
    return <>
        <h3>To Do List: </h3>
        <label htmlFor="task">Enter Task: </label>
        <input type="text" id="task" onKeyDown={(e)=>handleChange(e)}/>
    </>
}