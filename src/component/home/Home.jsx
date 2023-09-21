import React from 'react'
import { NavLink } from 'react-router-dom'
import "./home.css"
function Home() {
  return (
    <div className='home'>
    <NavLink  className="links" to="/pagination">Pagination</NavLink>
   <NavLink className="links" to="/scroll">Scroll</NavLink>
  </div>
  )
}

export default Home