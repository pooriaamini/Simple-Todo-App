import { useState } from "react"
import Button from "./Button"
function Input({CreatTodo}){
    const [todo,setTodo]=useState('')
 
    const handlerSub=(e)=>{
        e.preventDefault()
        CreatTodo(todo)
        setTodo('')

    }

    const handlerChange=(e)=>{
        setTodo(e.target.value)


    }
    return(
        <div className="input"> 
            <form onSubmit={handlerSub}  className="input-form" action="">

                <input onChange={handlerChange} value={todo}    className="input-inp" type="text" placeholder="Add a new todo"/>
                <Button >
                    Add
                </Button>
            </form>
        </div>
    )
}

export default Input