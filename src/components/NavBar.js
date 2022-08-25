import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
     <div className="nav">
     <div className='main-page'><Link to='/'>Hi!!!&#128512;</Link></div>
        <div className='home'><Link to='/home'>Home</Link></div>
        <div className='education'><Link to='/Education'>Education</Link></div>
        <div className='project'><Link to="/Projects">Projects</Link></div>
        <div className='skill'><Link to="/Skills">Skills</Link></div>
     </div>
    </>
  )
}

export default NavBar