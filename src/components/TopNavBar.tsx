import React from "react";

export default function TopNavBar() {
  return (
    <div className="mt-[14px] h-[41px] border-b-[1px] flex justify-between">
      <div className="flex items-center ml-[26px] mb-4">
        <p className="font-medium ">Projects</p>
        <img
          className="h-[10px] w-[10px] mx-1 "
          src="images/thin_side_arrow.svg"
          alt="side-arrow"
        />
        <p className="text-[#6C6F75] mr-2">Cloud Platform</p>
        <p className="text-[#6C6F75] py-0 px-2 rounded-md bg-[#EEEEEE]">
          FLYTE{" "}
        </p>
      </div>

      <div className="flex items-center mb-4 mr-[10px]">
        <div className="bg-[#EFEFEF] h-[32px] w-[175px] flex items-center rounded-lg">
          <img
            className="ml-[10px]"
            src="images/search.svg"
            alt="search icon"
          />
        </div>
        <div className="border-[1px] rounded-lg flex ml-[12px] border-[#DFE1E4]">
          <img
            className="p-[8px] h-[32px] flex-grow-0 "
            src="images/bi_layout-sidebar-reverse.svg"
            alt="layout"
          />
        </div>
      </div>
    </div>
  );
}
