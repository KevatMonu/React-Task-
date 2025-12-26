import React from 'react'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav1">
        Horizon Courts
      </div>
      <ul className="nav2">
        <li>About Us</li>
        <li>Services</li>
        <li>Coaches</li>
        <li>Events</li>
        <li>Contacts</li>
      </ul>
      <button className="nav3">Book Now <i class="ri-arrow-right-up-line"></i></button>
    </div>
  )
}

export default Navbar
