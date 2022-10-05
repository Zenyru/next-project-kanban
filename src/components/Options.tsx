import React from "react";

export default function Options() {
  return (
    <div className=" mt-[14px] border-r-[1px] ">
      <div className="ml-[12px] mb-[17px]">
        <p className="font-bold">Bun</p>
      </div>
      <div className="h-[108px] w-[244px] bg-[#191925] flex items-center relative">
        <p className="text-white ml-4  font-bold tracking-wide ">
          {" "}
          <span>
            {" "}
            Dimention{" "}
            <img
              className="absolute top-[52px]"
              src="images/line_under_dimension.svg"
              alt="underline"
            />{" "}
          </span>{" "}
          <br /> Project
        </p>
        <div className="mt-[5px] ml-[4rem]">
          <img src="images/line_pattern.svg" alt="pattern" />
        </div>
      </div>
      <div>
        <div className="flex items-end justify-between">
          <div className="mt-[12px] ml-[12px] flex items-center">
            <img
              className="w-[18px] h-[18px]"
              src="images/shield-tick.svg"
              alt="sheild"
            />
            <p className="ml-[4px]">Level 1</p>
          </div>
          <div className="mr-4">
            <p className="text-[#7F8995]">40%</p>
          </div>
        </div>
        <div className="mt-[8px] pb-4 border-b-[1px] relative ">
          <img
            className="ml-[12px]"
            src="images/Progress_Bar.svg"
            alt="progress bar"
          />
          <img
            className="absolute h-6 w-6 top-[-.40rem] left-[115px]"
            src="images/Progress_Bar_middle.svg"
            alt="progress bar middle icon"
          />
        </div>
      </div>
      <div>
        <div className="flex">
          <img
            className="ml-[17px] mt-[23px] mr-[8px]"
            src="images/people.svg"
            alt="people"
          />
          <p className="font-medium mt-[23px]">Community</p>
          <img
            className="mt-[23px] ml-[88px]"
            src="images/arrow-down.svg"
            alt="down arrow"
          />
        </div>
        <div>
          <div className="flex items-center bg-[#F3F3F3] w-[184px] h-[27px] rounded-md ml-[39px] mt-[10px]">
            <img
              className="h-[14px] w-[14px] mx-[7.5px]"
              src="images/book.svg"
              alt="book"
            />
            <p className="text-[#515151]">Profile</p>
          </div>
          <div className="text-[#919397]  ml-[67px] text-[15px]">
            <p className="mt-[9px]">Issues</p>
            <p className="mt-[15px]">Pull Requests</p>
            <p className="mt-[15px]">Discussions</p>
          </div>
        </div>

        <div className="flex  text-[#6C6F75] mt-[20px] ">
          <div className="flex ml-[17px] ">
            <img
              className="mr-[7.5px]"
              src="images/code-circle.svg"
              alt="people"
            />
            <p className="font-medium">Code</p>
          </div>
          <img
            className="ml-[135px]"
            src="images/arrow-side.svg"
            alt="side arrow"
          />
        </div>

        <div className="flex  text-[#6C6F75] mt-[20px] ">
          <div className="flex ml-[17px] ">
            <img className="mr-[7.5px]" src="images/cloud.svg" alt="cloud" />
            <p className="font-medium">Cloud</p>
          </div>
          <img
            className="ml-[130px]"
            src="images/arrow-side.svg"
            alt="side arrow"
          />
        </div>

        <div className="flex  text-[#6C6F75] mt-[20px] ">
          <div className="flex ml-[17px] ">
            <img
              className="mr-[7.5px]"
              src="images/profile-2user.svg"
              alt="2-people"
            />
            <p className="font-medium">Teams</p>
          </div>
          <img
            className="ml-[129px]"
            src="images/arrow-side.svg"
            alt="side arrow"
          />
        </div>

        <div className="flex  text-[#6C6F75] mt-[20px] ">
          <div className="flex ml-[17px] ">
            <img className="mr-[7.5px]" src="images/global.svg" alt="globe" />
            <p className="font-medium">Domain</p>
          </div>
          <img
            className="ml-[119px]"
            src="images/arrow-side.svg"
            alt="side arrow"
          />
        </div>

        <div className="flex  text-[#6C6F75] mt-[20px] ">
          <div className="flex ml-[17px] ">
            <img
              className="mr-[7.5px]"
              src="images/frame.svg"
              alt="analytics"
            />
            <p className="font-medium">Analytics</p>
          </div>
          <img
            className="ml-[109.4px]"
            src="images/arrow-side.svg"
            alt="side arrow"
          />
        </div>
      </div>
    </div>
  );
}
