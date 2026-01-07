import React from 'react'
import Sec_Left from './Sec_Left'
import Sec_right from './Sec_right'

const Section2 = () => {
  return (
    <div className='w-full h-[85vh] flex  pt-10 gap-3.5 justify-center align-middle'>
        <Sec_Left/>
        <Sec_right/>
    </div>
  )
}

export default Section2