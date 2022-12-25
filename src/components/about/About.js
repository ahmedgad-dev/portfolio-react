import React from 'react'
import './about.scss'
import { ReactComponent as Facebook } from '../../assets/svg/facebook.svg'
import { ReactComponent as Telegram } from '../../assets/svg/telegram.svg'
import image2 from '../../assets/images/istock-3.jpeg'
import image1 from '../../assets/images/unsplash-1.jpg'
import image3 from '../../assets/images/unsplash-2.jpg'


const About = () => {
  return (
    <section className="section-about mt-12">
      <div className="mb-24">
          <h2 className="heading-secondary uppercase">
              all types of projects    
          </h2>
       </div>

       <div className="row-self-defined">
           <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-small">Ahmed Gad</h3>
               <p className="paragraph">
                  I have been developing on the web for 2 years, my goal is
                  to always make creative designs and unique user experience
                  in my websites by giving attention to the simplest details and
                  understanding the business environment that the website will be
                  operating at. I use react JavaScript in most my recent projects
                  to deliver a modern user exeperience in 2023 due to it's speed
                  and functionality and supporting libraries.
               </p>
               <h3 className="heading-tertiary u-margin-bottom-small">feel free to contact me on social media</h3>
               <div className="flex flex-row justify-center align-center">
                  <Telegram/>
                  <Facebook/>
               </div>
   
            </div>
            <div className="col-1-of-2">
               <div className="composition">
                 <img src={image1} alt="1" className="composition__photo composition__photo--p1"/>
                 <img src={image2} alt="2" className="composition__photo composition__photo--p2"/>
                 <img src={image3} alt="3" className="composition__photo composition__photo--p3"/>
               </div>
            </div>
       </div>                
    </section> 
  )
}

export default About