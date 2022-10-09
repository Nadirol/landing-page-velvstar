import React from "react";
import '../style/header.css'

function Header() {
    return (
        <header className="primary-header">
                <div className="container">
                    <nav className="primary-navigation">
                        <button className="mobile-nav-toggle | mobile-only" aria-controls="primary-navigation__menu" aria-expanded="false">
                            <span className="visually-hidden">Menu</span>
                        </button>
                        <a href="index.html">
                            <img src={process.env.PUBLIC_URL + "/images/Type=logo-purple.png"} className="brand-logo" alt=""/>
                        </a>
                        <div className="nav-menu" id="primary-navigation__menu">
                            <ul className="nav-list">
                                <li className="nav-item">
                                    <a className="nav-link | ff-primary title-normal__semi-bold" href="index.html">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link | ff-primary title-normal__semi-bold" href="#services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link | ff-primary title-normal__semi-bold" href="#results">Result</a>
                                </li>
                            </ul>
                            <a className="button button-primary primary-navigation__button | ff-primary button-small text-center" href="#contact">Contact Us</a>
                        </div>
                    </nav>
                    <div className="header-content | text-center z-tier-2">
                        <h1 className="header-heading | ff-secondary display-extra-large display-small__mobile-only">Email &#38; SMS Marketing for Clothing Brands</h1>
                        <p className="header-description | body-extra-large body-normal__mobile-only">
                            Our goal is top at the heart of creativity
                            services industry as a digital creator. In has a after comment.</p>
                        <div className="header-button__wrapper | mx-auto">
                            <a className="button button-primary button-small" href="#about">Meet Our CEO</a>
                            <a className="button button-outline button-small" href="#contact">
                                <img className="mobile-only" src={process.env.PUBLIC_URL + "/images/play-circle.svg"} alt="" />
                                Contact Us
                            </a>
                        </div>
                    </div>
                    <div className="hero-wrapper ">
                        <img src={process.env.PUBLIC_URL + "/images/Email.svg"} alt="" className="hero-image z-tier-1" id="hero-email"/>
                        <img src={process.env.PUBLIC_URL + "/images/Group.svg"} alt="" className="hero-image z-tier-1" id="hero-group"/>
                        <img src={process.env.PUBLIC_URL + "/images/Vector.svg"} alt="" className="hero-image z-tier-1" id="hero-vector"/>
                        <img src={process.env.PUBLIC_URL + "/images/Message.svg"} alt="" className="hero-image z-tier-1" id="hero-message"/>
                    </div>
                </div>
            </header>
    )
}

export default Header;