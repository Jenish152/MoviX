import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";
import { Link } from "react-router-dom";
// import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";


const Footer = () => {
    
  
  return (
      <footer className="footer">
          <div className="contentWrapper">
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
               
                    <Link to="https://github.com/Jenish152" className="icon"><FaGithub /></Link>
                    <Link to="https://www.instagram.com/jenish_shiroya1507/?igshid=MzRlODBiNWFlZA%3D%3D" className="icon"><FaInstagram /></Link>
                    <Link to="https://www.google.com/" className="icon"><FaFacebookF /></Link>
                    <Link to="https://www.linkedin.com/in/jenish-shiroya" className="icon"><FaLinkedin /></Link>
                          
                  
              </div>
          </div>
      </footer>
  );
};

export default Footer;