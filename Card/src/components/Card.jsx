import React from "react";

const Card = (props) => {
  return (
    <div className="w-70 h-110 rounded-3xl border-2   relative overflow-hidden hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-black/30">
      <img
        src={props.img}
        alt=""
        className="w-full h-full object-center object-cover"
      />
      <div className="absolute bottom-0 w-full h-[48%] bg-black/30 backdrop-blur-xs backdrop-saturate-140 [mask-image:linear-gradient(to_top,black_80%,transparent)]  text-white flex flex-col justify-between px-3 ">
        <div className="flex flex-col pt-7 gap-1.5 ">
          <h5 className="text-3xl">{props.name}</h5>
          <p>{props.info} </p>
        </div>

        <div className="bottom flex justify-between align-middle pb-3">
          <div className="flex gap-3.5">
            <h5 className=" flex align-middle justify-center gap-1.5">
              <i class="ri-user-line"></i>
              {props.follower}
            </h5>
            <h5 className=" flex align-middle justify-center gap-1.5">
              <i class="ri-checkbox-multiple-line"></i>
              {props.share}
            </h5>
          </div>
          <button className=" flex items-center justify-center gap-1.5 text-center pt-[.1rem] pb-[.2rem] pl-[.9rem] pr-[.7rem] border-1 rounded-2xl">
            Follow<i class="ri-add-line "></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
