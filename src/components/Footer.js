// index.js
import { useState } from "react";
import "../App.css";

const Footer = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <footer className="footer-container">
            {/* Top Newsletter Section */}
            <div className="footer-top">
                <div>
                    <h3 className="footer-title">BE THE FIRST TO KNOW</h3>
                    <p className="footer-text">
                        Sign up for updates from mettā muse.
                    </p>
                </div>

                <div className="newsletter-box">
                    <input type="email" placeholder="Enter your e-mail..." />
                    <button>SUBSCRIBE</button>
                </div>

                <div className="contact-box">
                    <h4>CONTACT US</h4>
                    <p>+44 221 133 5360</p>
                    <p>customercare@mettamuse.com</p>

                    <div className="currency">
                        <h4>CURRENCY</h4>
                        <div className="flag-box">
                            <img src={process.env.PUBLIC_URL + '/United States of America (US).png'} alt="US Currency Flag" className="flag-img" />
                            <span>USD</span>
                        </div>
                        <p className="small-note">
                            Transactions will be completed in Euros and a currency reference is available on hover.
                        </p>
                    </div>
                </div>
            </div>

            <hr className="footer-divider" />

            {/* Desktop Footer Navigation */}
            <div className="footer-bottom">
                <div className="footer-col">
                    <h4>mettā muse</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Stories</li>
                        <li>Artisans</li>
                        <li>Boutiques</li>
                        <li>Contact Us</li>
                        <li>EU Compliances Docs</li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>QUICK LINKS</h4>
                    <ul>
                        <li>Orders & Shipping</li>
                        <li>Join/Login as a Seller</li>
                        <li>Payment & Pricing</li>
                        <li>Return & Refunds</li>
                        <li>FAQs</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>FOLLOW US</h4>
                    <div className="social-icons">
                        <img src={process.env.PUBLIC_URL + '/insta.png'} alt="instagram-icon" />
                        <img src={process.env.PUBLIC_URL + '/a.png'} alt="linkedin-icon" />
                    </div>

                    <h4 className="accept-title">mettā muse ACCEPTS</h4>
                    <div className="payments">
                        <img src={process.env.PUBLIC_URL + '/Group 136188.png'} alt="GPay" />
                        <img src={process.env.PUBLIC_URL + '/Group 136190.png'} alt="MasterCard" />
                        <img src={process.env.PUBLIC_URL + '/Group 136192.png'} alt="Visa" />
                        <img src={process.env.PUBLIC_URL + '/Group 136193.png'} alt="Amex" />
                        <img src={process.env.PUBLIC_URL + '/Group 136194.png'} alt="Apple Pay" />
                        <img src={process.env.PUBLIC_URL + '/Group 136195.png'} alt="OPay" />
                    </div>
                </div>
            </div>

            {/* Mobile Accordion Sections */}
            <div className="footer-mobile">
                {["mettā muse", "QUICK LINKS", "FOLLOW US"].map((section, i) => (
                    <div key={i} className="mobile-section">
                        <div
                            className="acc-title"
                            onClick={() => toggleSection(section)}
                        >
                            {section}
                            <span>{openSection === section ? "▲" : "▼"}</span>
                        </div>
                        {openSection === section && (
                            <div className="acc-body">
                                {section === "mettā muse" && (
                                    <ul>
                                        <li>About Us</li>
                                        <li>Stories</li>
                                        <li>Artisans</li>
                                        <li>Boutiques</li>
                                        <li>Contact Us</li>
                                        <li>EU Compliances Docs</li>
                                    </ul>
                                )}

                                {section === "QUICK LINKS" && (
                                    <ul>
                                        <li>Orders & Shipping</li>
                                        <li>Join/Login as a Seller</li>
                                        <li>Payment & Pricing</li>
                                        <li>Return & Refunds</li>
                                        <li>FAQs</li>
                                        <li>Privacy Policy</li>
                                        <li>Terms & Conditions</li>
                                    </ul>
                                )}

                                {section === "FOLLOW US" && (
                                    <div className="social-icons">
                                        <img src={process.env.PUBLIC_URL + '/insta.png'} alt="instagram-icon" />
                                        <img src={process.env.PUBLIC_URL + '/a.png'} alt="linkedin-icon" />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}

                <h4 className="accept-mobile-title">mettā muse ACCEPTS</h4>
                <div className="payments mobile-pay">
                    <img src={process.env.PUBLIC_URL + '/Group 136188.png'} alt="GPay" />
                    <img src={process.env.PUBLIC_URL + '/Group 136190.png'} alt="MasterCard" />
                    <img src={process.env.PUBLIC_URL + '/Group 136192.png'} alt="Visa" />
                    <img src={process.env.PUBLIC_URL + '/Group 136193.png'} alt="Amex" />
                    <img src={process.env.PUBLIC_URL + '/Group 136194.png'} alt="Apple Pay" />
                    <img src={process.env.PUBLIC_URL + '/Group 136195.png'} alt="OPay" />
                </div>
            </div>

            <p className="copyright">
                Copyright © 2023 mettamuse. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
