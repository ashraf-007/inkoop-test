import React from 'react'
import "./nav.css"


const Nav = () => {
    return (
 <nav className="nav">

  <div className='first'>
   <i className='hamburger fas fa-bars'></i>
   <li id='helper__1'></li>
  <div id='links'>
      <ul className="links">
        <li><p>Home</p></li>
        <li><p>Categories</p></li>
        <li><p>Podcasts</p></li>
      </ul>
    </div>

    <div id='brand'>
          <h1>BookPod<span>.</span></h1>
    </div>
    <li id='helper__2'></li>

  </div>

    <div>
        <i id='search-icon' class="fas fa-search"></i>
        <div id='input-container'>

        <div className='input-container'>
        <i class="fas fa-search"></i>
        <input type='text' placeholder='Search...' />
        </div>
        </div>
    </div>


    </nav>
    )
}

export default Nav
