import React, { useState } from 'react'

import Clear from './icons/Clear'
import Menu from './icons/Menu'

const Nav = ({ active, children }) => {
  return (
    <a href="/#" className={active ? 'font-bold' : 'transform hover:scale-105'}>
      {children}
    </a>
  )
}

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const navs = (
    <>
      <Nav active>Home</Nav>
      <Nav>Collection</Nav>
      <Nav>About</Nav>
      <Nav>Contact</Nav>
    </>
  )

  return (
    <>
      <div className="hidden md:grid grid-cols-4 gap-12 justify-items-center">
        {navs}
      </div>
      <button className="md:hidden" onClick={() => setOpen(true)}>
        <Menu />
      </button>
      <div
        className={`fixed h-full w-0 top-0 right-0 flex flex-col justify-center overflow-hidden bg-gray-900 z-10 transition-all duration-500 ${
          open ? 'w-full' : ''
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setOpen(false)}
        >
          <Clear />
        </button>
        <div className="grid gap-8 relative -top-10 text-lg justify-items-center px-14">
          {navs}
        </div>
      </div>
    </>
  )
}

export default Navbar
