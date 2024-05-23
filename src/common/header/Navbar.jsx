import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {

  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='catgrories d_flex'>
            <span class='fa-solid fa-border-all'></span>
            <h4>
              Kategoriler <i className='fa fa-chevron-down'></i>
            </h4>
          </div>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>

              <li>
                <Link to='/'>Elektronik</Link>
              </li>
              <li>
                <Link to='/'>Moda</Link>
              </li>
              <li>
                <Link to='/'>Ev,Yaşam,Kırtasiye,Ofis</Link>
              </li>
              <li>
                <Link to='/'>Anne,Bebek,Oyuncak</Link>
              </li>
              <li>
                <Link to='/'>Spor,Outdoor</Link>
              </li>
              <li>
                <Link to='/'>Kozmetik,Kişisel Bakım</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
