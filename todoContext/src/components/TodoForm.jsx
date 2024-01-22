import React, { useState } from 'react'
import {useTodo} from '../context/TodoContext'

function TodoForm() {
    
  const [todo,setTodo] = useState("");
  // now we can access with usetodoContext
  const {addTodo}  = useTodo();

  // add a todo
  const add = (e) => {
    e.preventDefault()

    if (!todo) {
      return
    } else {

      // we can send only todo also if key and value are same 
      addTodo({ todo , completed:false })

      // once completed(todo has been pushed to array) set the area value to empty again
      // ensures that the input field is cleared, making it ready for the user to input a new todo
      setTodo("")
    }
  }

  return (
      <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value ={todo}
              onChange={(ev) => setTodo(ev.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;

