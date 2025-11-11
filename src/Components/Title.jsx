import React,  { useState }  from "react";

export const Title = ({e,text,setText})=>{
    

      const handleTitle = (e) => {
    setText(e.target.value);
  };
    return(
        <>
        <input
          className="px-5 w-1/2 py-2 border-2 rounded"
          type="text"
          placeholder="Enter Notes"
          value={text}
          onChange={(e) => {
            handleTitle(e);
          }}
        />
        </>
    )
}