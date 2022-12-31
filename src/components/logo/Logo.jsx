import React from 'react'
import './logo.styles.scss'

const Logo = ({nav}) => {
  return (
    <div className= {`${ nav? ' logo logo-header logo-nav' : 'logo logo-header'}`} ></div>
  )
}

export default Logo