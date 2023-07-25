import React from "react";

// import css
import '../../Styles/LandingPages/footer.css'

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-image">
          <img src="./images/logo.png" style={{ height: '50px', width: 'auto' }} alt="footer" />
        </div>
        <div>
          <p>© 2023 TEAM HIDAN All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  

export default Footer;