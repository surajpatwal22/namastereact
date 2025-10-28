import { LOGO_URL } from "../utils/contant";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <div className="logo">
                        <img src={LOGO_URL} className="footerLogo" alt="logo" />
                    </div>
                    <h2 className="footer-logo">Suraj</h2>
                    <p className="footer-tagline">
                        Building digital experiences that inspire and empower.
                    </p>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title">Contact</h3>
                    <p>123 Web Street, Innovation City, India</p>
                    <p>📞 +91 98765 43210</p>
                    <p>📧 suraj@example.com</p>
                </div>
            </div>

            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Suraj. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer;