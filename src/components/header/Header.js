import React, {Fragment} from 'react'
import './header.scss'
import personalImage from '../../assets/images/agad.jpg'
import { ReactComponent as Calender } from '../../assets/svg/calendar-alt-stroke.svg'
import { ReactComponent as Earth } from '../../assets/svg/earth.svg'
import { ReactComponent as Location } from '../../assets/svg/location.svg'
import { ReactComponent as Phone } from '../../assets/svg/phone.svg'
import { ReactComponent as Mail } from '../../assets/svg/envelop.svg'
import { ReactComponent as HtmlIcon } from '../../assets/svg/html-five2.svg'
import { ReactComponent as ReduxIcon } from '../../assets/svg/redux.svg'
import { ReactComponent as ReactIcon } from '../../assets/svg/react.svg'
import { ReactComponent as FirebaseIcon } from '../../assets/svg/firebase.svg'
import { ReactComponent as CssIcon } from '../../assets/svg/css3.svg'
import { ReactComponent as JavascriptIcon } from '../../assets/svg/javascript.svg'
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg'
import { ReactComponent as SassIcon } from '../../assets/svg/sass.svg'
import { ReactComponent as NodeIcon } from '../../assets/svg/node-dot-js.svg'
import { ReactComponent as NpmIcon } from '../../assets/svg/npm.svg'
import { ReactComponent as TailwindIcon } from '../../assets/svg/tailwindcss.svg'
import { ReactComponent as WordpressIcon } from '../../assets/svg/wordpress.svg'
import { ReactComponent as VisualstudioIcon } from '../../assets/svg/visualstudiocode.svg'
import { ReactComponent as BootstrapIcon } from '../../assets/svg/bootstrap.svg'

function Header() {
  return (
  <Fragment>
    
    <div className="header h-full xl:h-screen lg:w-screen p-6 relative flex justify-between from-primary to-secondary text-primary-content -mt-[4rem] grid 
       place-items-center items-end bg-gradient-to-br pt-20 bg-contain"> 

    { /* <div className="site-logo site-logo__1 flex">
        Ahmed Gad Dev
      </div>*/}

      <div className="details flex flex-col w-1/2 h-full align-center"> 
         <div className="site-logo site-logo__2 flex self-start mb-6">
            Ahmed Gad Dev
         </div>

         <div className="info h-auto flex rounded-lg shadow-md w- sm:w-2/3">
          <div className="flex flex-row justify-center align-center">
            <progress className="progress progress-secondary w-72 sm:w-96 h-4 m-2" value="80" max="100"/> <span className='leading-2 mt-1'>JavaScript</span>
          </div>
          
          <div className="flex flex-row justify-center align-center">
            <progress className="progress progress-secondary w-72 sm:w-96 h-4 m-2" value="85" max="100"/> <span className='leading-2 mt-1'>React JS</span>
          </div>

          <div className="flex flex-row justify-center align-center">
            <progress className="progress progress-secondary w-72 sm:w-96 h-4 m-2" value="85" max="100"/> <span className='leading-2 mt-1'>CSS/SASS</span>
          </div>

          <div className="flex flex-row justify-center align-center">
            <progress className="progress progress-secondary w-72 sm:w-96 h-4 m-2" value="93" max="100"/> <span className='leading-2 mt-1'>HTML/JSX</span>
          </div>

          <div className="flex flex-row justify-center align-center">
            <progress className="progress progress-secondary w-72 sm:w-96 h-4 m-2" value="85" max="100"/> <span className='leading-2 mt-1'>Tailwind</span>
          </div>

          <div className="flex flex-row justify-center align-center">
            <progress className="progress progress-secondary w-72 sm:w-96 h-4 m-2" value="65" max="100"/> <span className='leading-2 mt-1'>Redux</span>
          </div>

          <div className="flex flex-row justify-center align-center">
            <progress className="progress progress-secondary w-72 sm:w-96 h-4 m-2" value="30" max="100"/> <span className='leading-2 mt-1'>Node JS</span>
          </div>
         </div>

         <div className="brands rounded-lg flex flex-col justify-center align-center items-center self-end">
            <div className="brands-col flex flex-row mb-3">
              <ReactIcon className='brand-icon'/>
              <JavascriptIcon className='brand-icon'/>
              <ReduxIcon className='brand-icon'/>
              <NodeIcon className='brand-icon'/>
              <FirebaseIcon className='brand-icon'/> 
              <NpmIcon className='brand-icon'/>           
            </div>

            <div className="brands-col flex flex-row mb-3">
              <SassIcon className='brand-icon'/>
              <HtmlIcon className='brand-icon'/>  
              <CssIcon className='brand-icon'/>
              <TailwindIcon className='brand-icon'/>
              <BootstrapIcon className='brand-icon'/>
            </div>

            <div className="brands-col flex flex-row mb-3">
              <WordpressIcon className='brand-icon'/>                           
              <VisualstudioIcon className='brand-icon'/>     
              <GithubIcon className='brand-icon'/>       
            </div>       
         </div>
      </div> 

     <div className="card-container w-1/2 flex justify-end slef-end">  
      <div className="card w-96 glass shadow-xl">
      <div><figure><img src= {personalImage} alt="card!" className='card-image mt-4'/></figure></div> 
        <div className="card-body text-white">
         <h4 className="card-title text-white">Ahmed Gad</h4>
         <div className="card-actions">             
            <h6 className='info-span'> <Calender className='icon'/> 22 May 1996</h6>
            <h6 className='info-span'> <Location className='icon'/> Helioplis, Cairo, Egypt</h6>
            <h6 className='info-span'> <Mail className='icon'/> ahmedamrgad12345@gmail.com</h6>
            <h6 className='info-span'> <Phone className='icon'/> +201009860198</h6>
            <h6 className='info-span'> <Earth className='icon'/> ahmedgad-dev.com</h6>          
         </div>      
       </div>
     </div>
    </div>
   </div>
  </Fragment>
  )
}

export default Header