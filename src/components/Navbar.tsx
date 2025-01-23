import { useState, useEffect } from "react";
import { User } from "lucide-react";
import "@styles/components/Navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // const toggleMobileMenu = () => {
    //     setIsMobileMenuOpen(!isMobileMenuOpen);
    //     if (!isMobileMenuOpen) {
    //         document.body.style.overflow = "hidden";
    //     } else {
    //         document.body.style.overflow = "unset";
    //     }
    // };

    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="container navbar-content">
                <div className="logo">
                    <span className="logo-text gradient-text">Monolith</span>
                </div>

                {/* Desktop Navigation */}
                <div className="nav-links desktop-only">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </div>

                <div className="nav-actions">
                    <button className="auth-button desktop-only">Login</button>
                    <User size={24} className="nav-icon desktop-only" />
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
                <div className="mobile-nav-links">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                    <div className="mobile-actions">
                        <button className="auth-button">Login</button>
                        <div className="mobile-icons">
                            <User size={24} className="nav-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
