import React from "react";
import { Delbutton } from "./DelButton";

export const Notes = ({task,setTask,text,setText,data,setData}) => {
    return (
        <>
            <div className=" lg:border-l-2 p-10 bg-gray-600 lg:w-1/2">
                <h1 className="text-xl font-bold">Your Notes</h1>
                <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">
                    {task.map((items,indx)=>{
                        return(
                            <div key={indx} className="h-50 w-52  text-black bg-white border-2 rounded-2xl">
                            <h3 className="leading-tight text-xl px-4 py-2 font-bold">{items.text}</h3>
                            <p className=" px-4 py-2">{items.data}</p>
                           <Delbutton id={indx} task={task} setTask={setTask}/>
                            </div>
                        
                        )
                    })}
                    
                </div>
                
            </div>
        </>

    )
}