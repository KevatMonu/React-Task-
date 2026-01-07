import React from 'react'
import Nav from './components/Nav'
import Section1 from './components/Section1/Hero.jsx'
import Card from './components/Cards/Card.jsx'
import Section2 from './components/Section1/Section2/Section2.jsx'

const App = () => {
  return (
    <div className='w-full h-full bg-[#060503] px-8.5 text-white'>
      <Nav />
      <Section1/>
      <Card/>
      <Section2/>
    </div>
  )
}

export default App
