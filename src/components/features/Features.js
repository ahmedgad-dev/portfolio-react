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
          <h1 className='services text-center text-3xl sm:text-5xl lg:text-7xl mb-2'>Services</h1>  
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
                    React and ES6 JS a modern and functioning way to make dynamic web apps in 2023. It works by re-rendering 
                    only the changed components which produce high UI/UX.
                </p>
            </div>
        </div>

        <div className="col-1-of-4">
            <div className="feature-box flex flex-col jutsify-center align-center">
                <div className='flex self-center align-center items-center justify-center gap-3'>
                    <HtmlIcon className='feature-box__icon' /> <CssIcon className='feature-box__icon'/>
                </div>
                <h3 className="heading-tertiary u-margin-bottom-small m-2">Convert To HTML</h3>
                <p className="feature-box__text">
                   Converting any custom design, figma, PDF or other design you choose can be also another page from the internet into a static HTML5 
                   and CSS3/SASS web page.
                </p>
            </div>
        </div>

        <div className="col-1-of-4">
            <div className="feature-box flex flex-col jutsify-center align-center">
                <WordpressIcon className='flex self-center feature-box__icon'/>
                <h3 className="heading-tertiary u-margin-bottom-small m-2">Wordpress</h3>
                <p className="feature-box__text">
                    My favourite website builder because it offers a huge number of plugins and themes that can be suitable for 
                    any business criteria, it is also used to build many websites on the web
                </p>
            </div>
        </div>

        <div className="col-1-of-4">
            <div className="feature-box flex flex-col jutsify-center align-center">
                <div className='flex self-center align-center items-center justify-center gap-3'>
                    <NodeIcon className='feature-box__icon' /> <FirebaseIcon className='feature-box__icon'/>
                </div>
                <h3 className="heading-tertiary u-margin-bottom-small m-2">Back End</h3>
                 <p className="feature-box__text">
                    I also work on the backend with Node JS, Express JS and firebase, it was usually to provide a simple database
                    to hold my API's JSON data, users information and authentication .
                </p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Features