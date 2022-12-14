import React, {Fragment} from 'react'
import './header.scss'
import personalImage from '../../assets/images/agad.jpg'
import Navbar from '../navbar/Navbar'
function Header() {
  return (
    <Fragment>
      <Navbar />
    <div className="header container h-full lg:h-screen p-6 relative flex justify-between"> 


      <div className="details flex flex-col w-1/2 w-1/2 h-full justify-around align-center"> 
         <div className="site-logo flex self-start">
            Ahmed Gad Dev
         </div>

         <div className="info h-auto flex self-center rounded-lg shadow-md w-2/3">
             <p className='about-paragraph mt-3 capitalize '>
                I have been developing on the web for 2 years, my goal is
                to always make creative designs and unique user experience
                in my websites by giving attention to the simplest details and
                understanding the business environment that the website will be
                operating at. I use react JavaScript in most my recent projects
                to deliver a modern user exeperience in 2023 due to it's speed
                and functionality and supporting libraries.</p>
         </div>
      </div> 

     <div className="w-1/2 flex justify-end">  
      <div className="card w-96 glass shadow-xl">
       <figure><img src= {personalImage} alt="card!" className='card-image mt-4'/></figure>
        <div className="card-body text-white">
         <h4 className="card-title">Ahmed Gad</h4>
         <div className="card-actions">             
            <h6>Birthday &nbsp;&nbsp; 22 May 1996</h6>
            <h6>Address &nbsp;&nbsp;  Helioplis, Cairo, Egypt</h6>
            <h6>Email  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   ahmedamrgad12345@gmail.com</h6>
            <h6>Phone  &nbsp;&nbsp;&nbsp;   +201009860198</h6>
            <h6>Website &nbsp;&nbsp;  ahmedgad-dev.com</h6>          
         </div>      
       </div>
     </div>
    </div>
   </div>
   </Fragment>
  )
}

export default Header