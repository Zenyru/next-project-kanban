import React from "react";

export default function Profiles() {
  return (
    <div className="mt-[7px] flex justify-between pb-4 border-b-[1px] border-[#F4F4F4] ">
      <div className="flex font-medium ml-[25px]">
        <button className="flex w-[70px] h-[30px] items-center justify-center border-[1px] border-[#DFE1E4] rounded-lg shadow-[0_4px_0px_rgb(223,225,228)] active:translate-y-[0.12rem] duration-200 ">
          <img
            className="h-[18px] w-[18px]"
            src="images/colored_cloud.svg"
            alt="cloud"
          />
          <p className="text-[#6C6F75] ml-[7.5px]">25%</p>
        </button>

        <button
          className="relative  flex ml-[6px] w-[70px] h-[30px] items-center justify-center border-[1px] border-[#DFE1E4] rounded-lg shadow-[0_4px_0px_rgb(223,225,228)]
          active:translate-y-[0.12rem] duration-200 "
        >
          <p className="text-[#6C6F75]">Filter</p>
        </button>
      </div>

      <div className="flex mr-[10px] text-[#5C6066]">
        <img src="images/profile_pic1.svg" alt="profile picture" />
        <img
          className="ml-[4px] mr-4"
          src="images/profile_pic2.svg"
          alt="profile picture"
        />
        <button
          className="flex items-center justify-evenly h-[30px] w-[70px] rounded-lg border-[1px] border-[#DFE1E4] shadow-[0_4px_0px_rgb(223,225,228)]
          active:translate-y-[0.12rem] duration-200 "
        >
          <img
            className="px-[.35rem] py-1 rounded-lg bg-[#DFE1E4]"
            src="images/list.svg"
            alt="list icon"
          />
          <img src="images/vertical_line.svg" alt="vertical line" />
          <img src="images/4_tiles.svg" alt="4_tiles icon" />
        </button>
        <button
          className=" ml-[6px] flex items-center justify-center h-[28px] w-[38px] rounded-lg border-[1px] border-[#DFE1E4] shadow-[0_4px_0px_rgb(223,225,228)]
          active:translate-y-[0.12rem] duration-200"
        >
          <img src="images/headphones.svg" alt="headphones" />
        </button>

        <button
          className=" ml-[7px] flex items-center justify-center h-[28px] w-[74px] rounded-lg border-[1px] border-[#DFE1E4] shadow-[0_4px_0px_rgb(223,225,228)]
          active:translate-y-[0.12rem] duration-200"
        >
          <img src="images/chain.svg" alt="chain" />
          <p className="ml-[7px] font-medium" >Share</p>
        </button>


      </div>
    </div>
  );
}
