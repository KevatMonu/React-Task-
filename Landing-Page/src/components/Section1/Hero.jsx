import React from "react";
import Heroinfo from "./Heroinfo";

const Section1 = () => {
  return (
    <div className="w-full h-[85vh]  relative mt-4   ">
      <img
        src="https://react8fashion.netlify.app/heroImage.jpg"
        alt=""
        className="w-full h-full object-center object-cover rotate-y-180 rounded-2xl brightness-50"
      />
      <Heroinfo />
    </div>
  );
};

export default Section1;
