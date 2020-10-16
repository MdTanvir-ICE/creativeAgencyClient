import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent ">

            <Link className="navbar-brand" to="/">
                <img style={{height:'50px', width:'150px'}} src={logo} alt=""/>
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav nav ml-auto mt-4  ">
                    <li className="nav-item demo mr-3 pt-3">
                        <Link className="nav-link " to="/">Home</Link>
                    </li>
                    <li className="nav-item mr-2 demo pt-3">
                        <Link className="nav-link " to="/">Our Protfolio</Link>
                    </li>
                    <li className="nav-item mr-2 demo pt-3">
                        <Link className="nav-link " to="/">Our Team</Link>
                    </li>
                    <li className="nav-item mr-2 demo pt-3">
                        <Link className="nav-link " to="/">Contact Us</Link>
                    </li>
                    <li className="nav-item mr-2  py-1 ">
                    <Link className="nav-link" to="/login">
                            <button className="btn button  btn-dark">Login</button>
                    </Link> 
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;