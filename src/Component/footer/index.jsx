import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-column">
          <h3>Social</h3>
          <ul>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Youtube</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>Contact Us</li>
            <li>yourexample@email.com</li>
            <li>example@email.com</li>
            <li>Call us: +1 254 568-5479</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>About</h3>
          <ul>
            <li>Support Center</li>
            <li>Customer Support</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Customer Care</h3>
          <ul>
            <li>FAQ & Helps</li>
            <li>Shipping & Delivery</li>
            <li>Return & Exchanges</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Our Information</h3>
          <ul>
            <li>Privacy policy update</li>
            <li>Terms & conditions</li>
            <li>Return Policy</li>
            <li>Site Map</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Top Categories</h3>
          <ul>
            <li>Men's Wear</li>
            <li>Kid's Wear</li>
            <li>Sports Wear</li>
          </ul>
        </div>
      </div>
      <div class="footer-copyright">
        © 2023 Your Company Name. All rights reserved.
      </div>
    </>
  );
}

export default Footer;
