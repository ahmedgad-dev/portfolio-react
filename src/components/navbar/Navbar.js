import React from 'react'
import './navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 z-10 bg-white  backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    
  </div>
  <div className="navbar-end">
    
    <button className="btn btn-secondary"> Contact </button>
  </div>
</div>
  )
}

export default Navbar