import React, { useEffect } from 'react'
import MovieLogo from '../assets/MovieLogo.jpeg'
import UseLogo from '../assets/UseLogo.jpeg'
import { useState } from 'react'
import {Link, NavLink, useNavigate } from 'react-router-dom'
import { navigation } from '../constants/navigation'
import { IoSearchSharp } from "react-icons/io5";


const Header = () => {
    const [searchInput,setSearchInput] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        if(searchInput){

          navigate(`/search?q=${searchInput}`)
        }
    },[searchInput])
    const handleSubmit = (e) => {
      e.preventDefault()
    }
    return (
      <header className='fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75 z-50'>
  <div className='container mx-auto px-4 flex items-center justify-between h-full'>
    <Link to={'/'}>
      <img
        className='rounded'
        src={MovieLogo}
        alt="logo"
        width={90}
      />
    </Link>

    <nav className='hidden lg:flex items-center gap-3 ml-10'>
      {navigation.map((nav, index) => (
        <NavLink
          key={nav.label}
          to={nav.href}
          className={({ isActive }) =>
            `px-2 hover:text-neutral-100 transition-colors duration-200 ${isActive ? "text-neutral-100" : "text-neutral-400"}`
          }
        >
          {nav.label}
        </NavLink>
      ))}
    </nav>

    <div className='flex items-center gap-4'>
      <form className='hidden lg:flex items-center gap-2'>
        <input
          type="text"
          placeholder='Search Here...'
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          className='px-5 py-1 bg-transparent outline-none border-none'
        />
        <button type="submit" onClick={handleSubmit}>
          <IoSearchSharp className='text-2xl text-white' />
        </button>
      </form>

      <div className='w-10 h-10'>
        <img
          src={UseLogo}
          className='rounded-full overflow-hidden w-full h-full cursor-pointer active:scale-50 transition-all'
        />
      </div>
    </div>
  </div>
</header>

    );
  }

export default Header
