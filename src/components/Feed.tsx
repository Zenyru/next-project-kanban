import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import KanbanCards from "./KanbanCards";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import AddCard from "./AddCard";
import details from "../../details";

export default function Feed() {
  const [kanbans, setKanbans] = useState(details);
  // const [kanbanOrder , setKanbanOrder]= useState(details);

  let randomId: string;
  const [newCardCol1, setnewCardCol1] = useState<any>([]);
  const [newCardCol2, setnewCardCol2] = useState<any>([]);
  const [newCardCol3, setnewCardCol3] = useState<any>([]);

  const addClicked = (colnumber: string) => {
    randomId = Math.floor(Math.random() * 6 + 1).toString();

    if (colnumber === "col1") {
      const filteredKanban = kanbans.filter(kanban => kanban.id === randomId);
      filteredKanban.forEach(kanban => kanban.col === "col1");
      setnewCardCol1([...newCardCol1, randomId]);

    } else if (colnumber === "col2") {
      const filteredKanban = kanbans.filter(kanban => kanban.id === randomId);
      filteredKanban.forEach(kanban => kanban.col === "col2");
      setnewCardCol2([...newCardCol2, randomId]);
      
    } else if (colnumber === "col3") {
      const filteredKanban = kanbans.filter(kanban => kanban.id === randomId);
      filteredKanban.forEach(kanban => kanban.col === "col3");
      setnewCardCol3([...newCardCol3, randomId]);
      
    }

    
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
  };

  return (

    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable direction={"horizontal"} type="column" droppableId="dropSeq">   
        {provided => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className=" parentDiv ml-[25px] flex flex-wrap h-min mt-6 mr-2 space-x-9 "
          >

            <div className="flex-1 space-y-6  ">
              {newCardCol1.map((item: string) => (
                <div key={uuidv4()} className="draggable" draggable="true">
                  <KanbanCards id={item} />
                </div>
              ))}
              {kanbans
                .filter(kanban => kanban.col === "col1")
                .map(f => (
                  <div key={uuidv4()} className="draggable" draggable="true">
                    <KanbanCards id={f.id} />
                  </div>
                ))}
              <AddCard id="col1" onClick={() => addClicked("col1")} />
            </div>


            <div className="flex-1 space-y-6">
              {newCardCol2.map((item: string) => (
                <div key={uuidv4()} className="draggable" draggable="true">
                  <KanbanCards id={item} />
                </div>
              ))}
              {kanbans
                .filter(kanban => kanban.col === "col2")
                .map(f => (
                  <div key={uuidv4()} className="draggable" draggable="true">
                    <KanbanCards id={f.id} />
                  </div>
                ))}
              <AddCard
                {...provided.placeholder}
                id="col2"
                onClick={() => addClicked("col2")}
              />
            </div>



            <div className="flex-1 space-y-6 ">
              {newCardCol3.map((item: string) => (
                <div key={uuidv4()} className="draggable" draggable="true">
                  <KanbanCards key={uuidv4()} id={item} />
                </div>
              ))}
              {kanbans
                .filter(kanban => kanban.col === "col3")
                .map(f => (
                  <div key={uuidv4()} className="draggable" draggable="true">
                    <KanbanCards id={f.id} />
                  </div>
                ))}
              <AddCard
                {...provided.placeholder}
                id="col3"
                onClick={() => addClicked("col3")}
              />
           </div>



          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
