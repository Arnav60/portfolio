import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer_title">Let's Connect!</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer_link">
              Portfolio
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="" className="footer_social-link" target="_blank">
            <i class="uil uil-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/arnav-awasthi-a39148159/"
            className="footer_social-link"
            target="_blank"
          >
            <i class="uil uil-linkedin-alt"></i>
          </a>

          <a
            href="https://github.com/Arnav60"
            className="footer_social-link"
            target="_blank"
          >
            <i class="uil uil-github-alt"></i>
          </a>
        </div>
        <span className="footer__copy">Arnav Awasthi</span>
      </div>
    </footer>
  );
};

export default Footer;
