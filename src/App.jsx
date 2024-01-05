import { useState } from "react"
import Input from "./component/Input"
import List from "./component/List"
import Headers from "./component/Header"
function App() {

  const [arrayTodo,setArrayTodo]=useState([])

  const CreatTodo=(todo)=>{
    setArrayTodo(todoReq=>[
      ...todoReq,{todo,id:Math.round(Math.random()*999)

      }
    ])

  }

  const handlerDelete=(id)=>{

    setArrayTodo(todoReq=>todoReq.filter(item=>{
      return item.id!=id;
    }))

   

  }

  const editeTodoById=(id,todoEdite)=>{
    setArrayTodo(todoReq=>todoReq.map(item=>{
      if (item.id=id){
        return {...item,todo:todoEdite}
      }
      return item;
    }))

  }
  
  return(

   
    <div className="app">
      <Headers/>
      <Input CreatTodo={CreatTodo}/>
      
      <List editeTodoById={editeTodoById} handlerDelete={handlerDelete}  arrayTodo={arrayTodo}/>
      

     


      
    </div>
  )
}


export default App
