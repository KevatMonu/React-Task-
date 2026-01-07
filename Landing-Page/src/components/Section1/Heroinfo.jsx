import React from 'react'

const Heroinfo = () => {
  return (
   <div className="w-full flex  flex-col gap-5 text-white absolute bottom-0  px-5 py-6">
        <div className=" text-[8rem]  leading-30 uppercase  text-white font-[100]">
          Design <br /> <span className="pl-10 ">& Freedom</span>
        </div>
        <div className="flex justify-between align-middle items-center">
          <p className="text-[1.1rem]">
            Explore Independent Style by Embracing Uniqueness <br />
            with Our Exclusive Designer Apparel
          </p>
          <h3 className="text-[1.5rem] active:scale-90 cursor-pointer"><i class="ri-arrow-down-line"></i> Learn more</h3>
        </div>
      </div>
  )
}

export default Heroinfo