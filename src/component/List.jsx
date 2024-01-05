import ListShow from "./ListShow"

function List({arrayTodo,handlerDelete,editeTodoById}){
    return(
        <div className="list">
            {
                arrayTodo.map(todoItem=><ListShow todoItem={todoItem} key={todoItem.id} handlerDelete={handlerDelete} editeTodoById={editeTodoById}   />)

            
            }


        </div>
    )
}

export default List