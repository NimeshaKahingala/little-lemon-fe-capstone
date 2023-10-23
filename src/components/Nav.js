import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import './Nav.scss';

function Nav() {
    return <>
        <nav className="container nav-bar">
            <div className="logo-wrap"><img src={logo} alt="logo" className="logo"></img></div>
            <ul>
                <li><Link>Home</Link></li>
                <li><Link>About</Link></li>
                <li><Link>Menu</Link></li>
                <li><Link>Reservation</Link></li>
                <li><Link>Order Online</Link></li>
                <li><Link>Login</Link></li>
            </ul>
        </nav>
    </>
}

export default Nav;