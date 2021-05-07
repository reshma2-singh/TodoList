import React,{useState} from 'react'
import './App.css';
import Button from '@material-ui/core/Button';
import Todo from "./Todo"

function App() {
  const[inputList,setInputList] = useState();
    const[item,setItem]=useState([]);
    const itemEvent = (event)=>{
        setInputList(event.target.value);
    }
    const listOfItem = () =>{
        setItem((oldItems)=>{
            return[...oldItems,inputList]
        })
setInputList(" ");
    }
    const deleteItem = (id) =>{
        console.log("deleted")
        setItem((oldItems)=>{  return oldItems.filter((arrElem,index) =>{
            return index!==id})
      
        })
    }
  return (
    <div className="app">
      <h1 className="app__tag">Todolist</h1>
        
      <input type="text" value={inputList} placeholder = "Add Todo..." onChange={itemEvent} /> 
         <Button onClick={listOfItem} type='submit'>Add</Button>
          
         
         <ol>
             {item.map((itemval,index)=>{
                return <Todo text={itemval}
                key={index}
                id={index}
                onSelect={deleteItem}
                />
             })}
         </ol>
         
      
     
    </div>
  );
}

export default App;
