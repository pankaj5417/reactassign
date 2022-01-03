import { useState } from "react"
import { GroceryInput } from "./GroceryInput"
import { GroceryList } from "./GroceryList"
import {nanoid} from "nanoid"
export  const Grocery=()=>{
    const [list, setList]=useState([])

    const handleClick=(data) =>{
        console.log("Data in parent", data)

        const payload={
            title:data,
            status:false,
            id:nanoid(7)
        }
        setList([...list, payload])
    }
const handleToggle=(id)=>{

    console.log("check",id)
    list.filter((ele,index, arr)=>{
        if(ele.id===id){
            
            list.splice(index,1)
        }
   console.log(list)
    })
}


return (
    <>
    <GroceryInput getData={handleClick} />
    {list.map((e,i, arr)=>(
        <GroceryList key={i} {...e} handleToggle={handleToggle} />
    ))}
    </>
)
   
}