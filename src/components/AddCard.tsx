import React from "react";

interface AddCard {
  id:string;
  onClick: () => void;
}

export default function AddCard(props: AddCard) {
  return (
    <div
      onClick={props.onClick}
      className="flex  cursor-pointer active:translate-y-1 duration-200 items-center justify-center w-full h-10 border-[1px] border-[#EAEDF0]"
    >
      <img src="images/purple_add.svg" alt="add" />
      <p className="text-[#4734FE] ml-[14px] font-bold">Add a Card</p>
    </div>
  );
}
