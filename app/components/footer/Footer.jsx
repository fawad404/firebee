import React from 'react';
import './footer.css';
import { FaYoutube, FaTwitter, FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <div className="gradient-bar"></div>
    <div className="footer p-16">
         <div className="colorlayout"></div>
      <div className="footer-top">
        <div className="footer-column">
          <h3>About</h3>
          <p>Home</p>
          <p>Product</p>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <p>Activate</p>
          <p>Login</p>
        </div>
        <div className="footer-column">
          <h3>Find Us On</h3>
          <div className="social-icons">
            <FaYoutube />
            <FaTwitter />
            <FaFacebook />
            <FaInstagram />
            <FaPinterest />
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-logo">
           <img src="/imagesdsd.png" className='h-12 mt-4' alt="" />
          <div className="footer-copyright">
          <p>Copyright © 2020 Firebee Technologies, Inc. All rights reserved.</p>
          <p>The statements on this page have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
        </div>
        </div>
        <div className="footer-text">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
       
      </div>
      


    </div>
    </>
  );
};

export default Footer;
