import React from "react";
import '../style/header.css'

function Header() {
    return (
        <header className="primary-header">
                <div className="container">
                    <nav className="primary-navigation">
                        <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
                            <span className="visually-hidden">Menu</span>
                        </button>
                        <img src={process.env.PUBLIC_URL + "/images/Type=logo-purple.png"} alt="" className="brand-logo"/>
                        <ul className="nav-list" role="list" id="primary-navigation">
                            <li className="nav-item">
                                <a href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a href="#results">Result</a>
                            </li>
                        </ul>
                        <button className="button-primary">
                            <a href="#contact">Contact Us</a>
                        </button>
                    </nav>
                    <div className="header-content">
                        <h1 className="header-heading">Email &#38; SMS Marketing for Clothing Brands</h1>
                        <p className="header-description">
                            Our goal is top at the heart of creativity
                            services industry as a digital creator. In has a after comment.</p>
                        <div className="header-button__wrapper">
                            <button className="primary-button">
                                <a href="#about">Meet Our CEO</a>
                            </button>
                            <button className="neutral-button">
                                <a href="#contact">Contact Us</a>
                            </button>
                        </div>
                    </div>
                    <div className="hero-wrapper">
                        <img src={process.env.PUBLIC_URL + "/images/Email.svg"} alt="" className="hero-image"/>
                        <img src={process.env.PUBLIC_URL + "/images/Group.svg"} alt="" className="hero-image"/>
                        <img src={process.env.PUBLIC_URL + "/images/Vector.svg"} alt="" className="hero-image"/>
                        <img src={process.env.PUBLIC_URL + "/images/Message.svg"} alt="" className="hero-image"/>
                    </div>
                </div>
            </header>
    )
}

export default Header;