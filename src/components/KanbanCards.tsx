import React, { useEffect, useRef, useState } from "react";
import details from "../../details";
import { v4 as uuidv4 } from "uuid";
import { Draggable } from "react-beautiful-dnd";

interface kanbanProps {
  id: string;
}

const KanbanCards: React.FC<kanbanProps> = ({ id }) => {
  // const ref = useRef(null);
  const [kanbanOrder , setKanbanOrder] = useState(details)
  const [kanbanCard, setKanbanCard] = useState<
    | {
        id: string;
        title: string;
        content?: string;
        contentImgLocation?: string;
        category: string;
        chats: number;
        people: [];
        colab?: number;
        date?: string;
        status?: string;
        completed?: string;
      }[]
    | undefined
  >([]);

  useEffect(() => {
    const kanbanCardDetails: any = [];
    kanbanCardDetails.push(details.find(detail => detail.id == id));
    setKanbanCard(kanbanCardDetails);
    
  }, []);
  
  // console.log(kanbanCard);

  //  const index = kanbanCardOrder?.map((kanban, index)=>(index))

  // console.log(kanbanCardOrder);

  // kanbanCard?.map((kanba, index) => console.log(index));

  // const getDragAfterElement = (container: any, y: number, x: number) => {
  //   const draggableElements = [
  //     ...container.querySelectorAll(".draggable:not(.dragging)"),
  //   ];
  //   return draggableElements.reduce(
  //     (closest, child) => {
  //       const box = child.getBoundingClientRect();
  //       const offset = y - box.top - box.height / 2;
  //       const width = x - box.left - box.width / 2;
  //       if (offset < 0 && offset > closest.offset) {
  //         return { offset: offset, element: child };
  //       } else {
  //         return closest;
  //       }
  //     },
  //     {
  //       offset: Number.NEGATIVE_INFINITY,
  //     }
  //   ).element;
  // };

  return (
    <div

    // draggable="true"
    // onDragStart={() => {
    //   const wholeCard: any = ref.current;
    //   // const parent:any = wholeCard.parentElement;

    //   wholeCard?.classList.add("opacity-50", "dragging");
    // }}
    // onDragOver={(e: any) => {
    //   e.preventDefault();
    //   const draggingCard: any = document.querySelector(".dragging");
    //   const cardsContainer = draggingCard.closest(".cardsCont");
    //   // const parentDiv = document.querySelector(".parentDiv");
    //   const afterElement = getDragAfterElement(
    //     cardsContainer,
    //     e.clientY,
    //     e.clientX
    //   );
    //   if (afterElement == null) {
    //     cardsContainer?.appendChild(draggingCard);
    //   } else {
    //     cardsContainer?.insertBefore(draggingCard, afterElement);
    //   }
    // }}
    // onDragEnd={(e: any) => {
    //   const wholeCard: any = ref.current;
    //   wholeCard?.classList.remove("opacity-50", "dragging");
    // }}
    // ref={ref}
    >
      <>
        {kanbanCard?.map((kanban, index) => (
          <div key={uuidv4()} className="border-[1px] border-[#EAEDF0] rounded-lg cursor-grab active:cursor-grabbing active:rotate-3 duration-300 active:shadow-lg pt-[8px] ">
            <p className="text-[#7F8995] text-[10px] ml-4 mb-[6px]">
              FLYTE-{id}
            </p>
            <p className="font-bold text-[#111118]  tracking-wide ml-4">
              {kanban.title}
            </p>
            {kanban.content ? (
              <p className="text-[#7F8995] ml-4 text-[13px] mt-[6px]">
                {kanban.content}
              </p>
            ) : kanban.contentImgLocation ? (
              <img
                className="w-[90%] ml-4 mt-[6px]"
                src={kanban.contentImgLocation}
                alt="content image"
              />
            ) : null}

            <div className="flex border-b-[1px] border-[#EAEDF0] items-end justify-around pb-[15px]">
              {kanban.category === "Research" ? (
                <div className="h-6 w-[72px]  mt-[19px]  ml-[-4.4rem] bg-[#EDEBFF] flex items-center justify-center rounded-lg">
                  <p className="text-[12px] font-bold text-[#8478FE]">
                    {kanban.category}
                  </p>
                </div>
              ) : kanban.category === "UI Design" ? (
                <div className="h-6 w-[72px] mt-[19px] ml-[-4.4rem] bg-[#EAF0FF] flex items-center justify-center rounded-lg">
                  <p className="text-[12px] font-bold text-[#2F6BFE]">
                    {kanban.category}
                  </p>
                </div>
              ) : kanban.category === "Planning" ? (
                <div className="h-6 w-[72px] mt-[19px] ml-[-4.4rem] bg-[#F1F9EE] flex items-center justify-center rounded-lg">
                  <p className="text-[12px] font-bold text-[#78C552]">
                    {kanban.category}
                  </p>
                </div>
              ) : null}

              <div className="flex w-[30px] h-[30px] ">
                <>
                  {kanban.people?.map(person => (
                    <img
                      key={uuidv4()}
                      className=" mr-[-0.8rem]"
                      src={person}
                      alt="clients"
                    />
                  ))}
                </>
              </div>
            </div>
            <div className="flex h-10  items-center justify-between">
              <div className="flex  ">
                <div className="flex items-center">
                  <img
                    className="ml-4"
                    src="images/message.svg"
                    alt="chat icon"
                  />
                  <p className="text-[12px] font-bold text-[#98A5B3] ml-[5px]">
                    {kanban.chats}
                  </p>
                </div>
                <div>
                  {kanban.completed ? (
                    <div className="flex items-center">
                      <img
                        className="ml-4"
                        src="images/tick-circle.svg"
                        alt="complete icon"
                      />
                      <p className="text-[12px] font-bold text-[#98A5B3] ml-[5px]">
                        {kanban.completed}
                      </p>
                    </div>
                  ) : null}
                </div>

                <div className="flex items-center">
                  {kanban.colab ? (
                    <div className="flex items-center">
                      <img
                        className="ml-4"
                        src="images/link.svg"
                        alt="colab icon"
                      />
                      <p className="text-[12px] font-bold text-[#98A5B3] ml-[5px]">
                        {kanban.colab}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
              <div>
                {kanban.date ? (
                  <div className="flex items-center mr-3">
                    <img
                      className="ml-4"
                      src="images/calendar.svg"
                      alt="calendar icon"
                    />
                    <p className="text-[12px] font-medium text-[#98A5B3] ml-[5px]">
                      {kanban.date}
                    </p>
                  </div>
                ) : kanban.status ? (
                  <div className="flex mr-4">
                    <img src="images/tick-circle-green.svg" alt="done" />
                    <p className="text-[#78C552] ml-[4px] ">Done</p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </>
    </div>
  );
};

export default KanbanCards;
