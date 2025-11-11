import React from "react";


export const Details = ({e,data,setData})=>{
  const handleDetails = (e) => {
    setData(e.target.value);
    
  };

    return(
        <>
            <textarea
          className="px-5 w-1/2 h-30 py-2 border-2 rounded"
          type="text"
          placeholder="Write Details"
          value={data}
          onChange={(e) => {
            handleDetails(e);
          }}
        />
        </>
    )
}