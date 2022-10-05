import React from "react";

export default function Tabs () {
  return (
    <div className="ml-[25px] grid grid-cols-3 gap-9 grid-flow-col">
      <div className="flex pb-2 border-b-2 border-[#111118] justify-between items-center mt-[32px]">
        <div className="flex flex-grow justify-between">
          <div className="flex items-center">
            <img src="images/Ellipse.svg" alt="ellipse" />
            <p className="font-bold ml-[8px] mr-[12px]">TODO</p>
            <p className=" text-center px-[13px] py-[0.5px] rounded-lg border-[1px] border-[#EAEDF0] bg-[#F7F9FA] font-bold">
              2
            </p>
          </div>

          <div className="flex mr-10">
            <img src="images/add.svg" alt="plus" />
            <img className="ml-4" src="images/three_dots.svg" alt="plus" />
          </div>
        </div>
        
      </div>

      <div className="flex pb-2 border-b-2 border-[#4734FE] justify-between items-center mt-[32px]">
        <div className="flex flex-grow justify-between">
          <div className="flex items-center">
            <img src="images/inProgress.svg" alt="in progress" />
            <p className="font-bold ml-[8px] mr-[12px]">IN PROGRESS</p>
            <p className=" text-center px-[13px] py-[0.5px] rounded-lg border-[1px] border-[#EAEDF0] bg-[#F7F9FA] font-bold">
              8
            </p>
          </div>

          <div className="flex mr-10">
            <img src="images/add.svg" alt="plus" />
            <img className="ml-4" src="images/three_dots.svg" alt="plus" />
          </div>
        </div>
      </div>

      <div className="flex pb-2 border-b-2 border-[#78C552] justify-between items-center mt-[32px]">
        <div className="flex flex-grow justify-between">
          <div className="flex items-center">
            <img src="images/complete.svg" alt="complete" />
            <p className="font-bold ml-[8px] mr-[12px]">COMPLETED</p>
            <p className=" text-center px-[13px] py-[0.5px] rounded-lg border-[1px] border-[#EAEDF0] bg-[#F7F9FA] font-bold">
              2
            </p>
          </div>

          <div className="flex mr-10">
            <img src="images/add.svg" alt="plus" />
            <img className="ml-4" src="images/three_dots.svg" alt="plus" />
          </div>
        </div>
      </div>
    </div>
  );
}
