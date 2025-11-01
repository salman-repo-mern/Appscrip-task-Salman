import React, { useState } from "react";
import "../App.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            {/* === Top Row === */}
            <div className="header-top">
                {/* Mobile Menu Button */}
                <div className="header-left">
                    <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                        &#9776;
                    </button>
                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" className="brand-icon" />
                </div>

                <h1 className="header-logo">LOGO</h1>

                <div className="header-icons">
                    <span className="icon"><img src={process.env.PUBLIC_URL + '/search-normal.png'} alt="search-icon" /></span>
                    <span className="icon"><img src={process.env.PUBLIC_URL + '/heart.png'} alt='heart-icon' /></span>
                    <span className="icon"><img src={process.env.PUBLIC_URL + '/shopping-bag.png'} alt="shopping-icon" /></span>
                    <span className="icon"><img src={process.env.PUBLIC_URL + '/profile.png'} alt="profile-icon" /></span>

                    <div className="lang-menu">
                        <img src={process.env.PUBLIC_URL + '/language.png'} alt="search-icon" />
                    </div>
                </div>
            </div>

            {/* === Desktop Navigation === */}
            <nav className="nav-links">
                <a href="/">SHOP</a>
                <a href="/">SKILLS</a>
                <a href="/">STORIES</a>
                <a href="/">ABOUT</a>
                <a href="/">CONTACT US</a>
            </nav>

            {/* === Mobile Slide Menu === */}
            {menuOpen && (
                <div className="mobile-menu">
                    <a href="/">SHOP</a>
                    <a href="/">SKILLS</a>
                    <a href="/">STORIES</a>
                    <a href="/">ABOUT</a>
                    <a href="/">CONTACT US</a>
                </div>
            )}
        </header>
    );
};

export default Header;
