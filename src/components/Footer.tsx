import { Instagram, Twitter, Youtube } from "lucide-react";
import "../styles/components/Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>Monolith</h3>
                    <p>
                        GYM APP
                    </p>
                </div>

                <div className="footer-section">
                    <h4>Connect</h4>
                    <div className="social-links">
                        <a href="#" className="social-link">
                            <Instagram size={24} />
                        </a>
                        <a href="#" className="social-link">
                            <Twitter size={24} />
                        </a>
                        <a href="#" className="social-link">
                            <Youtube size={24} />
                        </a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Newsletter</h4>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Enter your email" />
                        <button className="btn-small">Join</button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>© 2025 MAZCA. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
