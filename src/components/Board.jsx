import { DragDropContext } from "react-beautiful-dnd";
import Drop from "./Drop";
const Board = ({data,setData}) => {

    const handleDragDrop=(result)=>{
        const {source,destination}=result;
        console.log(result);
        if(!destination) return;
        const sourceIndex=data.findIndex((elem)=>{
            return elem.id===source.droppableId;
        })
        const destinationIndex=data.findIndex((elem)=>{
            return elem.id===destination.droppableId;
        })
        if(sourceIndex===destinationIndex){
            const newData=[...data];
            const newItems=newData[sourceIndex].items;
            const sourceItemIndex=source.index;
            const destinationItemIndex=destination.index;
            if(sourceItemIndex===destinationItemIndex){
                return;
            }
            const [removed]=newItems.splice(sourceItemIndex,1);
            newItems.splice(destinationItemIndex,0,removed);
            setData(newData);
        }
        else{
            const newData=[...data];
            const newSourceItems=newData[sourceIndex].items;
            const newDestinationItems=newData[destinationIndex].items;
            const sourceItemIndex=source.index;
            const destinationItemIndex=destination.index;
            const [removed]=newSourceItems.splice(sourceItemIndex,1);
            newDestinationItems.splice(destinationItemIndex,0,removed);
            setData(newData);
        }
    }

    return <div className={`w-[85vw] flex justify-center`}>
        <div>
        <DragDropContext onDragEnd={(result)=>{
            handleDragDrop(result);
        }}>
            <Drop data={data} setData={setData}/>
        </DragDropContext>
        </div>
    </div>

}

export default Board
