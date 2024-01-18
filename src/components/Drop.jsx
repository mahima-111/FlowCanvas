import { Droppable } from "react-beautiful-dnd";
import Drag from "./Drag";

const Drop = ({data,setData}) => {

    return (
    <div className="flex gap-8 mt-8">
        {data.map((elem,index)=>{
            return (<div className="w-[27vw] bg-slate-100/10 rounded-lg pb-6 border-2 border-white min-h-96 h-fit " key={elem.id}>
            <div className={`flex gap-4 items-center ${data[index].color} pt-6 px-8 pb-4 rounded-t-md mb-3`}>
            <h2 className={`text-3xl font-semibold `}>
                {`${elem.title} `} 
            </h2>
            <span className={`text-xl font-medium bg-white rounded-full inline-block aspect-square w-8 self-start text-center`}>{elem.items.length}</span>
            </div>
            <div>
                <Droppable droppableId={elem.id}>
                {(provided)=>{
                    return (<div {...provided.droppableProps} ref={provided.innerRef} >
                        <Drag itemList={elem.items} data={data} setData={setData} curr={index}/>
                        {provided.placeholder}
                    </div>)
                }}
                </Droppable>
            </div>
            </div>)
        })}
    </div>
    )
}

export default Drop
