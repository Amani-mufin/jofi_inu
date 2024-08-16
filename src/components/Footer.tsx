import React from 'react';
import '../style/myStyle.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div>
                    <p className="footer-name">Jofi Inu</p>
                    <div className="footer-social">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className='w-4 h-4' />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className='w-4 h-4' />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='w-4 h-4' />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className='w-4 h-4' />
                        </a>
                    </div>
                </div>

                <div className="footer-links">
                    <div className="footer-links-right">
                        <p className="footer-exclude-font">CONVIENCED?</p>
                        <p className="footer-creation">Let's create magic</p>
                        <p className="footer-together">together</p>
                        <button className="footer-button">Buy $ JOFI {">"} </button>
                    </div>
                </div>
            </div>
            <div className="footer-text">
                <p>© 2024 Jofi Inu. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
