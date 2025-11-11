import React from "react";

export const Delbutton = ({id,task,setTask})=>{
const handleDelete = ()=>{
    const AddTask = [...task];
   AddTask.splice(id,1);

   setTask(AddTask);


}

    return(
        <>
        <button onClick={handleDelete} className="w-full my-12 cursor-pointer active:scale-96 bg-red-400 py-1 text-xs rounded  font-bold text-white">Delete</button>
                        
        </>
    )
}