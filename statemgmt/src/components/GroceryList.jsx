
export const GroceryList= ({title,status, id,handleToggle})=>{

    console.log("id", title, "is",id)
    return (
        <>
        <div>
            {title}
            <button onClick={()=>handleToggle(id)}>Remove Item</button>
            </div>
        </>
    )
}