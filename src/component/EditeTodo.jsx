import { useState } from "react";
import Button from "./Button";

function EditeTodo({todoItem,editeTodoById,changeContent}){
    
    const [save,setSave]=useState(todoItem.todo)

    const handlerSave=(e)=>{
        e.preventDefault()
        editeTodoById(todoItem.id,save)
        changeContent()
        setSave('')

        


    }

    const handlerChangeSave=(e)=>{
        setSave(e.target.value)


    }
    return(
        <form  className="edite-todo">
            
            <input onChange={handlerChangeSave} value={save}   className="edite-todo-inp" type="text"  />
            <Button onClick={handlerSave}   style={{backgroundColor:'black',color:'white'}} >
                save
            </Button>
          
        </form>
    )
}

export default EditeTodo;

