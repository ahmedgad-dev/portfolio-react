import React from 'react'
import './features.scss'
import '../../sass/grid.scss'
import { ReactComponent as ReactIcon } from '../../assets/svg/react.svg'
import { ReactComponent as JsIcon } from '../../assets/svg/javascript.svg'
import { ReactComponent as NodeIcon } from '../../assets/svg/node-dot-js.svg'
import { ReactComponent as FirebaseIcon } from '../../assets/svg/firebase.svg'
import { ReactComponent as WordpressIcon } from '../../assets/svg/wordpress.svg'

const Features = () => {
  return (
    <section className="section-features from-primary to-secondary bg-gradient-to-br">              
      <div className="row-self-defined">
        <div className="col-1-of-4">
            <div className="feature-box flex flex-col jutsify-center align-center">
                <ReactIcon className='flex self-center feature-box__icon' />
                <h3 className="heading-tertiary u-margin-bottom-small">React JS</h3>
                <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                </p>
            </div>
        </div>

        <div className="col-1-of-4">
            <div className="feature-box flex flex-col jutsify-center align-center">
                <JsIcon className='flex self-center feature-box__icon'/>
                <h3 className="heading-tertiary u-margin-bottom-small">Vanilla JS</h3>
                <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                </p>
            </div>
        </div>

        <div className="col-1-of-4">
            <div className="feature-box flex flex-col jutsify-center align-center">
                <div className='flex self-center align-center items-center justify-center'>
                    <NodeIcon className='feature-box__icon' /> <span className='text-6xl text-gray-500'>+</span> <FirebaseIcon className='feature-box__icon'/>
                </div>
                <h3 className="heading-tertiary u-margin-bottom-small">Back End</h3>
                 <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                </p>
            </div>
        </div>

        <div className="col-1-of-4">
            <div className="feature-box flex flex-col jutsify-center align-center">
                <WordpressIcon className='flex self-center feature-box__icon'/>
                <h3 className="heading-tertiary u-margin-bottom-small">Wordpress</h3>
                <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                </p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Features