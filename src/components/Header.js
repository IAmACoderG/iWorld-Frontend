import React from 'react'
import { Link, useNavigate } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('token')
    navigate('/login');
  };
  return (
    <header className="bg-[#081b29] flex justify-between items-center text-2xl text-[#ededed] font-semibold z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center z-50">
        <Link className="flex title-font font-medium items-center text-gray-900">
          <span className='text-[rgb(209,89,173)] cursor-pointer'>inoteBook</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
          <Link className="mr-5 hover:text-pink-300">Home</Link>
          <Link to="/contact-us" className="mr-5 hover:text-pink-300">ContactUs</Link>
          <Link to="/about-us" className="mr-5 hover:text-pink-300">AboutUs</Link>
          <Link onClick={handleLogOut} className="mr-5 hover:text-pink-300">LogOut</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

