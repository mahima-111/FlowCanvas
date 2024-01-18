import { useRef, useState } from "react"
import Board from "./Board";
import { IoAdd } from "react-icons/io5";
const Search = () => {
    const inputRef=useRef("");
    const [data,setData]=useState([
        {
            title:"To-do",
            id:"todo",
            items:[],
            borderColor:"border-blue-300",
            color:"bg-blue-300",
        },
        {
            title:"In progress",
            id:"progress",
            items:[],
            borderColor:"border-teal-300",
            color:"bg-teal-300",
        },
        {
            title:"Completed",
            id:"done",
            items:[],
            borderColor:"border-purple-300",
            color:"bg-purple-300",
        }
    ]);
    return (
    <div>
        <div className="absolute top-5 left-5 text-white font-bold text-4xl">Kanban Board</div>
        <div className="flex justify-center">
            <div className="flex items-center gap-2">
            <input ref={inputRef} type="text" placeholder="Enter a to do"
            className="border-white/80 border-2 rounded-md focus:outline-none px-4 py-2 w-[30vw] font-medium" />
            <button className="text-white" onClick={()=>{
                const d=new Date();
                const name=inputRef.current.value;
                if(inputRef.current.value===""){
                    alert("please enter a value");
                    return;
                }
                const id=d.toISOString();
                const itemObj={
                    name:name,
                    id:id
                }
                const newData=[...data];
                newData[0].items.push(itemObj);
                setData(newData);
                inputRef.current.value="";
            }}><IoAdd size={40}/></button>
            </div>
        </div>
        <Board data={data} setData={setData}/>
    </div>
    )
}

export default Search
