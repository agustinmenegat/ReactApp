import CartWidget from "./CartWidget";
import React from 'react';
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand"><img src="/img/logo.png" alt="logo" className="imgNav" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><NavLink to="/category/Raquetas" className="nav-link">Raquetas</NavLink></li>
                    <li className="nav-item"><NavLink to="/category/Indumentaria" className="nav-link">Indumentaria</NavLink></li>
                </ul>
                <div>
                    <CartWidget />
                </div>
                </div>
            </div>
        </nav>
    </>
    )
}

export default NavBar;