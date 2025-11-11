import React, { useState } from "react";
import { Title } from "./Title";
import { Details } from "./Details";
import { Button } from "./Button";
import { Notes } from "./Notes";




// import "./Form.css";

export const Form = () => {
 const [text, setText] = useState("");
    const [data, setData] = useState("");

    const [task,setTask] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();

        const AddTask = [...task];

        AddTask.push({text,data});

        setTask(AddTask);
        
        console.log(AddTask);
        

        setData("");
        setText("");
    };

    return (
        <>
            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
                className="p-5 lg:w-1/2 font-medium flex items-start flex-col gap-5 text-white"
            >
                <Title  text={text} setText={setText}/>
                <Details data={data} setData={setData} />
                <Button text={text} data={data}/>

            </form>

            <Notes task={task} setTask={setTask} text={text} setText={setText} data={data} setData={setData} />

            {/* {data.map((item, index) => {
          <p>{data.item}</p>;
        })} */}
        </>
    );
};
