import React, {Fragment} from 'react'
import './navbar.scss';
import {VscGithub} from 'react-icons/vsc'
import {ReactComponent as ChatIcon} from '../../assets/svg/chat-alt-stroke.svg'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom';
import  Logo from '../../components/logo/Logo';

const Navbar = () => {
  return (
  <Fragment>
    <div className="navigation sticky top-0 z-30 flex h-16 w-full justify-center align-center bg-opacity-90 backdrop-blur transition-all duration-100 text-primary-content">  
     <div className="nav-start flex justify-end align-center items-center w-1/2 ml-3">
      <div className="dropdown">
       <label tabIndex={0} className="btn btn-circle">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
       </label>
       <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-box w-52 bg-gray-700">
         <li><Link to='/github'>GitHub</Link></li>
         <li><a href='#projects'>Projects</a></li>
         <li><a href='#repos'>Github Repos</a></li>
         <li><a href='#about'>About</a></li>
       </ul>
      </div>
      <Logo className='logo-nav' nav/>
     </div>
     
   <div className="nav-end flex justify-end align-center items-center w-1/2 mr-3"> 
    <Link to='/github' className='nav-link text-white mr-3 font-bold' ><VscGithub className='git-icon'/></Link>
    <a href='https://wa.me/01009860198' target='_blank'><button className="btn btn-secondary"> <ChatIcon className='icon'/> </button></a> 
   </div>
  </div>
 <Outlet/>
</Fragment>
  )
}

export default Navbar