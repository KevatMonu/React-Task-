import React from "react";

const Nav = () => {
  return (
    <div className="w-full h-20  flex  justify-between align-middle items-center ">
      <h1 className="uppercase font-bold text-2xl text-white">DVSY</h1>
      <ul className="flex  gap-4.5">
        <li className="text-[.9rem]  uppercase px-3 py-1.5 text-white  pt-1.5 text-center bg-[gray] rounded-[.3rem]">
          Designers
        </li>
        <li className="text-[.9rem]  uppercase px-3 py-1.5 text-white  pt-1.5 text-center bg-[gray] rounded-[.3rem]">
          collabs
        </li>
        <li className="text-[.9rem]  uppercase px-3 py-1.5 text-white  pt-1.5 text-center bg-[gray] rounded-[.3rem]">
          events
        </li>
        <li className="text-[.9rem]  uppercase px-3 py-1.5 text-white  pt-1.5 text-center bg-[gray] rounded-[.3rem]">
          blog
        </li>
        <li className="text-[.9rem]  uppercase px-3 py-1.5 text-white  pt-1.5 text-center bg-[gray] rounded-[.3rem]">
          card
        </li>
        <li className="text-[.9rem]  uppercase px-3 py-1.5  pt-1.5 text-center text-black bg-[#fc6a45] rounded-[.3rem]">
          get in touch
        </li>
      </ul>
    </div>
  );
};

export default Nav;
