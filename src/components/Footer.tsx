import React from 'react';
import '../style/myStyle.css';
import Instagram from '../assets/Instagram';
import Facebook from '../assets/Facebook';
import LinkedIn from '../assets/LinkedIn';
import Twitter from '../assets/Twitter';



type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className="footer ">
            <div className="footer-content flex flex-col-reverse gap-8 md:flex-row items-center max-w-[1440px]  mx-auto" data-aos="fade-up">
                <div>
                    <p className="footer-name">Jofi Inu</p>
                    <div className="footer-social">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <Facebook />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <Twitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <Instagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <LinkedIn />
                        </a>
                    </div>
                </div>

                <div className="footer-links flex">
                    <div className="footer-links-right">
                        <p className="footer-exclude-font">CONVIENCED?</p>
                        <p className="footer-creation">Let's create magic</p>
                        <p className="footer-together">together</p>
                        <button className="footer-button">Buy $ JOFI {">"} </button>
                    </div>
                </div>
            </div>
            <div className="footer-text" data-aos="fade-up">
                <p>© 2024 Jofi Inu. All rights reserved. </p> 
            </div>
        </footer>
    );
};

export default Footer;
