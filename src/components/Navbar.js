import React from 'react';
import './style.css';
import logo from './images/Xpecto.png';
export default function navbar() {
    return (
        <>
            <nav id="navbar">
                <div id="logo">
                    <img src={logo} alt="" />
                </div>
                <ul>
                    <li className="item"><a href="#">Home</a></li>
                    <li className="item"><a href="#">About</a></li>
                    <li className="item"><a href="#">Inter IIT</a></li>
                    <li className="item"><a href="#">GSOC</a></li>
                    <li className="item"><a href="#">Xpecto</a></li>
                    <li className="item"><a href="#">Services</a></li>
                    <li className="item"><a href="#">Projects</a></li>
                    <div id="clubs">

                    <li className="item1"><a href="#"><div className="dropdown">
                        Clubs
                        <div className="dropdown-content">
                            <a href="#">Pc</a>
                            <a href="#">Yantrik</a>
                            <a href="#">Gdsc</a>
                        </div>
                    </div></a></li>
                    </div>
                    <li className="item"><a href="#">Team</a></li>
                    <li className="item"><a href="#">Events</a></li>
                    <li className="item"><a href="#">Work Report</a></li>
                    <li className="item"><a href="#">Gallery</a></li>
                </ul>
            </nav>
           
        </>
    )
}
