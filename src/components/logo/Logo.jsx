import React from 'react'
import './logo.styles.scss'
import { Link } from 'react-router-dom'

const Logo = ({nav}) => {
  return (
    <Link to='/'>
      <div className= {`${ nav? ' logo logo-header logo-nav' : 'logo logo-header'}`}></div>
    </Link>
  )
}

export default Logo