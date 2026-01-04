import React from 'react'
import './NavBar.css'
import { asset } from '../../assets/assets';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <img  className="logo mx-4" src={asset.delivery_logo} alt="logo" height={48} width={48}></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/explore">Explore</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/contactus">Contact</Link>
        </li>
        
      </ul>
       <div className="menubar-right">
          <div className="position-relative">
            <img  src={asset.cart} alt="cart" height={30} width={32} ></img>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">5</span>
          </div>
        
            <button className='btn btn-outline-primary'>Login</button>
            <button className='btn btn-outline-success'>Register</button>
         

        </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar