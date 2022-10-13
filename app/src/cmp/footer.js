import React from "react";
import '../style/footer.css'

function Footer() {
    return (
        <footer className="primary-footer | text-center">
            <div className="container">
                <nav className="footer-nav__wrapper">
                    <img src={process.env.PUBLIC_URL + "/images/Type=logo-purple.png"} alt="" className="footer-brand-logo"/>
                    <ul className="footer-nav-list">
                        <li className="footer-nav-item">
                            <a className="title-normal__semi-bold title-small__semi-bold__mobile-only" href="index.html">Home</a>
                        </li>
                        <li className="footer-nav-item">
                            <a className="title-normal__semi-bold title-small__semi-bold__mobile-only" href="#services">Services</a>
                        </li>
                        <li className="footer-nav-item">
                            <a className="title-normal__semi-bold title-small__semi-bold__mobile-only" href="#results">Result</a>
                        </li>
                        <li className="footer-nav-item">
                            <a className="title-normal__semi-bold title-small__semi-bold__mobile-only" href="#contact">Stay Connected</a>
                        </li>
                    </ul>
                </nav>
                <span className="copyright | body-small caption_regular__mobile-only">©️2020 Nice Banjara. All rights reserved.</span>
            </div>
        </footer>
    )
}

export default Footer;