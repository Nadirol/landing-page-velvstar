import React from "react";
import '../style/footer.css'

function Footer() {
    return (
        <footer className="primary-footer">
            <div className="container">
                <nav className="footer-nav__wrapper">
                    <img src={process.env.PUBLIC_URL + "/images/Type=logo-purple.png"} alt="" className="footer-brand-logo"/>
                    <ul className="footer-nav-list">
                        <li className="footer-nav-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="footer-nav-item">
                            <a href="#">Services</a>
                        </li>
                        <li className="footer-nav-item">
                            <a href="#">Result</a>
                        </li>
                        <li className="footer-nav-item">
                            <a href="#">Stay Connected</a>
                        </li>
                    </ul>
                </nav>
                <span className="copyright">©️2020 Nice Banjara. All rights reserved.</span>
            </div>
        </footer>
    )
}

export default Footer;