import React from 'react'
import Number from './Number'

const Card = () => {

  const card =[
    {
      title: "independency",
      description: "Explore the creativity of independent designers from around the globe"
    },
    {
      title: "uniquity",
      description: "Discover the charm of unique pieces that stand out effortlessly."
    },
    {
      title: "Quality",
      description: "Experience unparalleled craftsmanship and attention to detail."
    },
     {
      title: "Sustainability",
      description: "Embrace eco-conscious fashion choices without compromising on style."
    },
  ]



  return (
    <>
    <div className='w-full h-fit mt-5 flex gap-5'>
     {
      card.map((e)=>{
        return  <div className='w-[23vw] h-[13.5vw] px-5 py-5 flex flex-col justify-around align-middle rounded-2xl  bg-[#1E1E1E]'>
        <h3 className='text-[1.2rem] font-bold uppercase'>{e.title}</h3>
        <p className='text-[1.1rem]'>{e.description}</p>
        <div className='uppercase font-bold'><i class="ri-arrow-right-up-line p-2.5 border rounded-full font-extrabold text-1xl mr-3 bg-[#3B3B3B]" ></i> learn more</div>
      </div>
      })
     }
    </div>
      <Number/>
    </>
  )
}

export default Card