import React from 'react'
import './features.scss'
import '../../sass/grid.scss'
import { ReactComponent as ReactIcon } from '../../assets/svg/react.svg'
import { ReactComponent as JsIcon } from '../../assets/svg/javascript.svg'
import { ReactComponent as NodeIcon } from '../../assets/svg/node-dot-js.svg'
import { ReactComponent as FirebaseIcon } from '../../assets/svg/firebase.svg'
import { ReactComponent as WordpressIcon } from '../../assets/svg/wordpress.svg'
import { ReactComponent as HtmlIcon } from '../../assets/svg/html5-color.svg'
import { ReactComponent as CssIcon } from '../../assets/svg/css3-color.svg'

const Features = () => {
  return (
    <section className="section-features from-primary to-secondary bg-gradient-to-br">
        <div>
          <h1 className='services uppercase text-center text-2xl sm:text-5xl lg:text-7xl mb-2'>Skills</h1>  
          <div className="underline services"></div> 
        </div>  
                
      <div className="row-self-defined row-self-defined__updated">
        <div className="col-1-of-4">
            <div className="feature-box flex flex-col jutsify-center align-center">
                <div className='flex self-center align-center items-center justify-center gap-3'>
                    <ReactIcon className='feature-box__icon' /> <JsIcon className='feature-box__icon'/>
                </div>
                <h3 className="heading-tertiary u-margin-bottom-small m-2">React JS</h3>
                <p className="feature-box__text">
                    <ul>
                     <li>React Hooks</li>
                     <li>React Router V6</li>
                     <li>Context API</li>
                     <li>Redux</li>
                     <li>API calls</li>
                     <li>Performance </li>
                     <li>Jest</li>
                   </ul>
                </p>
            </div>
        </div>

        <div className="col-1-of-4">
            <div className="feature-box flex flex-col jutsify-center align-center">
                <div className='flex self-center align-center items-center justify-center gap-3'>
                    <HtmlIcon className='feature-box__icon' /> <CssIcon className='feature-box__icon'/>
                </div>
                <h3 className="heading-tertiary u-margin-bottom-small m-2">  HTML|CSS</h3>
                <p className="feature-box__text">
                  <ul>
                    <li>HTML 5</li>
                    <li>CSS3</li>
                    <li>SASS</li>
                    <li>Tailwind</li>
                    <li>BootStrap</li>
                    <li>CSS Animations</li> 
                    <li>Media Queries</li>          
                  </ul>
                </p>
            </div>
        </div>

        <div className="col-1-of-4">
            <div className="feature-box flex flex-col jutsify-center align-center">
                <JsIcon className='flex self-center feature-box__icon'/>
                <h3 className="heading-tertiary u-margin-bottom-small m-2">JavaScript</h3>
                <p className="feature-box__text">
                   <ul>
                    <li>ES6 JS</li>
                    <li>TypeScript</li>
                    <li>Functional paradigm</li>
                    <li>MVC programming</li>                    
                    <li>Data Types</li>
                    <li>Space & time complexity</li>
                   </ul>
                </p>
            </div>
        </div>

        <div className="col-1-of-4">
            <div className="feature-box flex flex-col jutsify-center align-center">
                <div className='flex self-center align-center items-center justify-center gap-3'>
                    <NodeIcon className='feature-box__icon' />
                </div>
                <h3 className="heading-tertiary u-margin-bottom-small m-2">Node JS</h3>
                 <p className="feature-box__text">
                   <ul>
                    <li>Express JS</li>
                    <li>MongoDB</li>
                    <li>PostgreSql</li>
                    <li>Redis</li>
                    <li>Authentication</li>
                    <li>Data Encryption</li>   
                    <li>Docker</li>               
                   </ul>
                </p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Features