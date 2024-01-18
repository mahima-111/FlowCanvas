import { Draggable } from "react-beautiful-dnd";
import { MdClose } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
const Drag = ({itemList,data,setData,curr}) => {
    return (
    <div className="py-4 px-3">
        {itemList.map((elem,index)=>{
            return (
            <Draggable draggableId={elem.id} key={elem.id} index={index}>
            {(provided)=>{ 
                return <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef} className={`bg-white flex justify-between border-t-8 ${data[curr].borderColor} rounded-md py-4 px-3 font-medium text-lg mb-4`} >
                    {elem.name}
                    
                    <div className="flex gap-4">
                    <button onClick={()=>{
                        let newVal=prompt("enter new value: ");
                        if(newVal){
                            const newData=[...data];
                            const newItems=data[curr].items;
                            newItems[index].name=newVal;
                            setData(newData);
                        }
                    }}><MdModeEditOutline /></button>
                    <button onClick={()=>{
                        const newData=[...data];
                        const newItems=data[curr].items;
                        newItems.splice(index,1);
                        setData(newData);
                    }}><MdClose  size={25} /></button>
                    </div>
                </div>
            }}
            </Draggable>
            )
        })}
    </div>
    )
}

export default Drag
