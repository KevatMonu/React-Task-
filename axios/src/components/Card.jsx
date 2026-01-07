import React from 'react'

const Card = (props) => {

    let b1 = Math.floor(Math.random()*256);
    let b2 = Math.floor(Math.random()*256);
    let b3 = Math.floor(Math.random()*256);


  return (
    <div className='w-full  p-20 flex  '>
        <div  className='w-[18vw] h-[50vh] rounded-2xl  flex flex-col justify-around align-middle text-center' style={{backgroundColor:`rgb(${b1},${b2},${b3})`}} >
            <h1 className='text-4xl'  >{props.e.name}</h1>
            <h3 className='text-2xl'>{props.e.username}</h3>
            <h4 className='text-3xl'>{props.e.email}</h4>
            <p className='text-2xl'>{props.e.website}</p>
        </div>
    </div>
  )
}

export default Card