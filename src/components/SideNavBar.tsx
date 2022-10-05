import React from "react";

export default function NavBar() {
  return (
    <div className=" w-[72px] border-r-[1px] h-screen flex flex-col items-center  ">
      <img
        className="w-[23px] h-[31px] mt-[14px]  "
        src="images/logoMark.svg"
        alt="logo"
      />
      <img
        src="images/line_below_the_logo.svg"
        alt="line"
        className="mt-[11px]"
      />

      <div className="relative">
        <img className="absolute left-[-5.5px] top-5" src="images/active_Indicator.svg" alt="indicator" />

        <img
          className="w-[32px] h-[32px] mt-4 "
          src="images/image-1.svg"
          alt="image-1"
        />
      </div>

      <img
        className="w-[32px] h-[32px] mt-[20.1px]"
        src="images/image-2.svg"
        alt="image-2"
      />
      <img
        className="w-[32px] h-[32px] mt-4"
        src="images/image-3.svg"
        alt="image-3"
      />
      <img
        className="w-[32px] h-[32px] mt-4"
        src="images/image-4.svg"
        alt="image-4"
      />

      <img
        className="w-[32px] h-[32px] mt-4"
        src="images/image-5.svg"
        alt="image-5"
      />
    </div>
  );
}
