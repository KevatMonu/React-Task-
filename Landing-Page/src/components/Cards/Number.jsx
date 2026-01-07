import React from "react";

const Number = () => {
  return (
    <div className="w-full h-30   flex justify-between px-20  items-center  ">
      <div className="flex flex-col  text-start">
        <h1 className="uppercase  text-[1.2rem] text-[#505050] font-[600]">Designer</h1>
        <h4 className="text-5xl">150+</h4>
      </div>
       <div className="flex flex-col  text-start">
        <h1 className="uppercase  text-[1.2rem] text-[#505050] font-[600]">Clients</h1>
        <h4 className="text-5xl">500+</h4>
      </div>
       <div className="flex flex-col  text-start">
        <h1 className="uppercase  text-[1.2rem] text-[#505050] font-[600]">Masterpieces</h1>
        <h4 className="text-5xl">20k+</h4>
      </div>
       <div className="flex flex-col  text-start">
        <h1 className="uppercase  text-[1.2rem] text-[#505050] font-[600]">Events</h1>
        <h4 className="text-5xl">50+</h4>
      </div>

    </div>
  );
};

export default Number;
