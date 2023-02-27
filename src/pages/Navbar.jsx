import React from 'react'
import { Link } from "react-router-dom";
import logo from '../images/logo.png';

import homeicon from '../images/home-nav.svg'
import spacialistsicon from '../images/about-us.png';
import registericon from '../images/register.png';
import buynowicon from '../images/buy-now.png';
import supporticon from '../images/support.png';
import carticon from '../images/cart.png';




const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-white bg-white">
                <div className="container">
                    <Link to="/" className="navbar-brand"><img src={logo} alt="Logo" className='img-fluid'/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2 position-relative">
                                <Link to="/" className="nav-link position-relative overflow-hidden py-0 px-2 active"><img src={homeicon} alt="home-icon" className='me-1 img-fluid'/><span className="text-dark-blue position-relative d-inline-block" data-hover="Home">Home</span></Link>
                            </li>
                            <li className="nav-item mx-2 position-relative">
                                <Link to="/specialists" className="nav-link position-relative overflow-hidden py-0 px-2"><img src={spacialistsicon} alt="specialists-icon" className='me-1 img-fluid'/><span className="text-dark-blue position-relative d-inline-block" data-hover="Specialists">Specialists</span></Link>
                            </li>
                            <li className="nav-item mx-2 position-relative">
                                <Link to="/register" className="nav-link position-relative overflow-hidden py-0 px-2"><img src={registericon} alt="register-icon" className='me-1 img-fluid'/><span className="text-dark-blue position-relative d-inline-block" data-hover="Register">Register</span></Link>
                            </li>
                            <li className="nav-item mx-2 position-relative">
                                <Link to="/buynow" className="nav-link position-relative overflow-hidden py-0 px-2"><img src={buynowicon} alt="buynow-icon" className='me-1 img-fluid'/><span className="text-dark-blue position-relative d-inline-block" data-hover="Buy Now">Buy Now</span></Link>
                            </li>
                            <li className="nav-item mx-2 position-relative">
                                <Link to="/support" className="nav-link position-relative overflow-hidden py-0 px-2"><img src={supporticon} alt="support-icon" className='me-1 img-fluid'/><span className="text-dark-blue position-relative d-inline-block" data-hover="Support">Support</span></Link>
                            </li>
                            <li className="nav-item mx-2 position-relative">
                                <Link to="/cart" className="nav-link position-relative overflow-hidden py-0 px-2"><img src={carticon} alt="cart-icon" className='me-1 img-fluid'/><span className="text-dark-blue position-relative d-inline-block" data-hover="Cart">Cart</span></Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar