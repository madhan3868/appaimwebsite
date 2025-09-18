import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-section">
          <div className="logo">
            <div className="logo-icon"></div>
            <span className="logo-text">Appaim</span>
          </div>
          <div className="logo-subtitle">PRIVATE LIMITED</div>
        </div>

        <div className="app-badges">
          <a href="#" className="badge">
            <div className="badge-icon">▶</div>
            <div>
              <div style={{fontSize: '10px'}}>GET IT ON</div>
              <div style={{fontWeight: 'bold'}}>Google Play</div>
            </div>
          </a>
          <a href="#" className="badge">
            <div className="badge-icon">🍎</div>
            <div>
              <div style={{fontSize: '10px'}}>Download on the</div>
              <div style={{fontWeight: 'bold'}}>App Store</div>
            </div>
          </a>
        </div>
        
        <hr />
        
        <nav className="navigation">
          <a href="#" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#support" className="nav-link">Support areas</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        
        <hr />
        
        <div className="social-links footer-link">
          <a href="#" className="social-link">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
          </a>
          <a href="#" className="social-link">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" />
          </a>
          <a href="#" className="social-link">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174876.png" alt="Twitter" />
          </a>
          <a href="#" className="social-link">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="Facebook" />
          </a>
        </div>

        <div className="footer-bottom">
          <p className="copyright">2025 All rights reserved. Appaim Private limited.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
