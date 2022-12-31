import React, {Fragment} from 'react'
import './navbar.scss';
import {ReactComponent as ChatIcon} from '../../assets/svg/chat-alt-stroke.svg'
import {ReactComponent as GithubIcon} from '../../assets/svg/github.svg'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom';
import  Logo from '../../components/logo/Logo';

const Navbar = () => {
  return (
  <Fragment>
    <div className="navbar sticky top-0 z-30 flex h-16 w-full justify-center align-center bg-opacity-90 backdrop-blur transition-all duration-100 text-primary-content">  
     <div className="navbar-start">
      <div className="dropdown">
       <label tabIndex={0} className="btn btn-circle">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
       </label>
       <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-box w-52 bg-gray-700">
         <li><a href='#projects'>Projects</a></li>
         <li><a href='_blank'>Portfolio</a></li>
         <li><a href='_blank'>About</a></li>
       </ul>
      </div>
      <Logo className='logo-nav' nav/>
     </div>

   <div className="navbar-center">
     
   </div>
     
   <div className="navbar-end"> 
    <Link to='/github' className='nav-link text-white mr-3 font-bold' ><GithubIcon className='icon'/></Link>
    <button className="btn "> <ChatIcon className='icon'/> </button>
   </div>
  </div>
 <Outlet/>
</Fragment>
  )
}

export default Navbar