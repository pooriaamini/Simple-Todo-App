import Button from "./Button";
import EditeTodo from "./EditeTodo";
import { MdDeleteOutline } from "react-icons/md";
import { FaDeleteLeft } from "react-icons/fa6";
import { useState } from "react";



function ListShow({ todoItem,handlerDelete,editeTodoById}) {

 const [edite,setEdite]=useState(false)

 const handlerClickDel=()=>{
    handlerDelete(todoItem.id)
    }

const handlerClickEdite=()=>{
    setEdite(e=>!e)

   
}


    return (
        <div className="list-show">

            {
               edite ? <EditeTodo editeTodoById={editeTodoById} todoItem={todoItem} changeContent={handlerClickEdite} />:  todoItem.todo
            }

            <div className="edite">
                <Button onClick={handlerClickDel}  >
                    <MdDeleteOutline />
                </Button>
                <Button onClick={handlerClickEdite}>
                    <FaDeleteLeft />
                </Button>
            </div>

        </div>
    )
}

export default ListShow;