import React from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import "./Todo.css"
function Todo({text,key,id,onSelect}) {
    return (
        <div className="todo">
          <p>{text}</p>
          
          <Button className="btn" onClick={()=>{onSelect(id)
          }}>< DeleteIcon/></Button> 
         </div> 
    )
}

export default Todo
