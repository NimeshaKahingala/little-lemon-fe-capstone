import React from "react";
import { Link } from "react-router-dom";
import LogoWhite from '../assets/logo-white.png';
import './Footer.scss';

function Footer() {
    return <footer className="footer">
        <div className="container">
            <div><img src={LogoWhite} className="logo"></img></div>
            <div>
                <h3 className="title">SITEMAP</h3>
                <ul>
                    <li><Link>Home</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Menu</Link></li>
                    <li><Link>Reservations</Link></li>
                    <li><Link>Order Online</Link></li>
                    <li><Link>Login</Link></li>
                </ul>
            </div>
            <div>
                <h3 className="title">CONTACT US</h3>
                <ul>
                    <li><Link className="contact-details"><span className="material-symbols-outlined icon">location_on</span>320 Michigan Ave, Chicago, IL 80442</Link></li>
                    <li><Link className="contact-details"><span className="material-symbols-outlined icon">call</span>(312) 532-5634</Link></li>
                    <li><Link className="contact-details"><span className="material-symbols-outlined icon">mail</span>customer@littlelemon.com</Link></li>
                </ul>
            </div>
            <div>
                <h3 className="title">CONNECT WITH US</h3>
                <ul>
                    <li><Link></Link></li>
                    <li><Link></Link></li>
                    <li><Link></Link></li>
                </ul>
            </div>
        </div>
    </footer>
}

export default Footer;