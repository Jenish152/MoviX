import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";

const Footer = () => {
  
  return (
      <footer className="footer">
          <ContentWrapper>
              <ul className="menuItems">
                  <li className="menuItem">Terms Of Use</li>
                  <li className="menuItem">Privacy-Policy</li>
                  <li className="menuItem">About</li>
                  <li className="menuItem">Blog</li>
                  <li className="menuItem">FAQ</li>
              </ul>
              <div className="infoText">
                 This Website Created By Jenish Shiroya...
              </div>
              <div className="socialIcons">
               
                    <Link to="https://www.google.com/" className="icon"><FaFacebookF /></Link>
                          
                
                  <span className="icon">
                      <FaInstagram />
                  </span>
                  <span className="icon">
                      <FaTwitter />
                  </span>
                  <span className="icon">
                      <FaLinkedin />
                  </span>
              </div>
          </ContentWrapper>
      </footer>
  );
};

export default Footer;