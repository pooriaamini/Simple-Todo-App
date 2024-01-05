import { useState } from "react";
import Button from "./Button";
import { MdOutlineDoneOutline } from "react-icons/md";
import Input from "./Input";

function Edite({handlerEdite,todo}){
    const [ed,setEd]=useState('')
    

    const handlerChangeEdite=(e)=>{

        setEd(e.target.value)





    }

    

    const handlerSubEdite=(e)=>{
        e.preventDefault()
        handlerEdite(ed)
       


        

    }

    return(
        <form onSubmit={handlerSubEdite} className="ed">

            <input value={ed}  onChange={handlerChangeEdite} className="ed-inp" type="text" />
            <Button>
            <MdOutlineDoneOutline />

            </Button>
            
        </form>
    )
}
export default Edite;