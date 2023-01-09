import React from 'react'
import Aou from '../../assets/images/aou.jpeg'
import Udacity from '../../assets/images/udacity.jpeg'
import './certificats.scss'
import {FcGraduationCap} from 'react-icons/fc'
import {GrCertificate, GrCode} from 'react-icons/gr'
import {TbLanguage} from 'react-icons/tb'
import {SiUdacity} from 'react-icons/si'
import {SiUdemy} from 'react-icons/si'
import {FaGraduationCap} from 'react-icons/fa'

const Certifications = () => {
  return (
    <div className='certifications flex flex-col sm:flex-row justify-center align center flex-wrap mt-36'>

         <div className="certificates w-full sm:w-1/2 flex mb-6 sm:mb-0 flex-col sm:flex-row items-center align-center justify-center sm:justify-between">
            <img src={Aou} alt="Open university certificate" />
            <img src={Udacity} alt="Udacity proffessional track certificate" />
        </div>

        <div className="education w-full sm:w-1/2 flex  justify-center">       
          <div className='flex flex-row justify-center align-center mb-6'>  <FaGraduationCap className='education-icon education-icon__1'/> <h2 className='name mr-2'> Education</h2></div>  

          <div className='info flex flex-col p-4 justify-around gap-6'>
            <div className="flex flex-row justify-center align-center">
              <GrCertificate className='education-icon'/> <span className='text-xl md:text-2xl lg:text-4xl'>Bachelor's Degree in computer Science</span>
            </div>
            <div className="flex flex-row justify-center align-center"> 
              <GrCode className='education-icon'/> <span className='text-xl md:text-2xl lg:text-4xl'>3 Years Work Experience</span>
            </div>

            <div className="flex flex-row justify-center align-center"> 
              <TbLanguage className='education-icon'/><span className='text-xl md:text-2xl lg:text-4xl'>English: fluent</span>
            </div>

            <div className="flex flex-row justify-center align-center"> 
              <SiUdemy className='education-icon'/><span className='text-xl md:text-2xl lg:text-4xl'>10+ Courses</span>
            </div>

            <div className="flex flex-row justify-center align-center"> 
              <SiUdacity className='education-icon'/><span className='text-xl md:text-2xl lg:text-4xl'>Trainings and certifications</span>
            </div>                    
          </div>

        </div>
       
    </div>
  )
}

export default Certifications