import React, { useState } from 'react'
import {IoMenuSharp} from 'react-icons/io5'
import './style.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const NavbarMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  const handleSearch = e => setSearch(e.target.value)

  const handleEnter = e => {
    if(e.keyCode === 13) {
      setSearch(e.target.value)
    }
  }

  const handleSubmitSearch = e => {
    e.preventDefault()

    if(search.trim()) {
      setSearch('')
      // change search input to slug string
      const slugs = search.replace(" ", "-")
      navigate({
        pathname: "/",
        search: `?s=${slugs}`,
      })
    }
  }

  const handleClickMenuButton = () => setIsOpen(!isOpen)
  
  return (
    <nav className='sticky top-0'>
      <div className="relative border-t border-t-green-700 px-5 mx-0 md:px-6 md:mx-16 flex flex-wrap items-center justify-between md:justify-start md:flex-row-reverse">
        <button type="button" onClick={handleClickMenuButton} className='button-menu bg-white outline-none border-none p-3'>
          <IoMenuSharp className='text-xl'/>
        </button>
        
        <div className="py-1 px-0 md:p-3 w-48 md:w-64">
          <form onSubmit={handleSubmitSearch} className="w-full overflow-hidden border-2 rounded-lg focus-within:border-green-700 flex items-center gap-2 px-2">
            <input 
              type="text" 
              className='border-none outline-none w-full py-1' 
              value={search}
              onChange={handleSearch}
              onKeyDown={handleEnter}
            />
            <button type="submit" className='shrink border-none outline-none bg-transparent'>
              <FaSearch className='w-5 h-5 text-slate-300' />
            </button>
          </form>
        </div>

        <div className={`nav-collapse collapsing ${isOpen ? "show" : ""}`}>
          <ul className='flex flex-col md:flex-row gap-2 md:gap-2 px-3 py-2 md:px-0 md:py-0'>
            <li className="py-1 px-0 md:p-2 lg:p-4">
              <NavLink to="/"
                className={({ isActive }) => 
                  `text-sm md:text-base block ${isActive ? "text-green-700 font-semibold" : "font-medium"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="py-1 px-0 md:p-2 lg:p-4">
              <NavLink to="/gallery"
                className={({ isActive }) =>
                  `text-sm md:text-base block ${isActive ? "text-green-700 font-semibold" : "font-medium"}`
                }
              >
                Gallery
              </NavLink>
            </li>
            <li className="py-1 px-0 md:p-2 lg:p-4">
              <NavLink to="/about-us"
                className={({ isActive }) =>
                  `text-sm md:text-base block ${isActive ? "text-green-700 font-semibold" : "font-medium"}`
                }
              >
                About Us
              </NavLink>
            </li>
            <li className="py-1 px-0 md:p-2 lg:p-4">
              <NavLink to="/contact-us"
                className={({ isActive }) =>
                  `text-sm md:text-base block ${isActive ? "text-green-700 font-semibold" : "font-medium"}`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default NavbarMenu