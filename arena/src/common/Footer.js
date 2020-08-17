import React from "react";
import { Link } from "react-router-dom";
import { apiUrl } from "../utils/config";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="links">
        <div className="events-tickets">
          <h4>EVENTS AND TICKETS</h4>
          <Link className="footer-links" href="#">
            View All Events
          </Link>
          <Link className="footer-links" href="#">
            Events Calendar
          </Link>
          <Link className="footer-links" href="#">
            Seating Maps
          </Link>
          <Link className="footer-links" href="#">
            Accessibility Seating
          </Link>
        </div>

        <div className="guest-xp">
          <h4>GUEST EXPERIENCE</h4>
          <Link className="footer-links" href="#">
            FAQs
          </Link>
          <Link className="footer-links" href="#">
            Ticketing Policies
          </Link>
          <Link className="footer-links" href="#">
            Contact Us
          </Link>

          <h4> ABOUT US</h4>
          <Link className="footer-links" href="#">
            Arena Information
          </Link>
          <Link className="footer-links" href="#">
            Careers
          </Link>
        </div>
      </div>

      <div className="info">
        <img src={apiUrl + "/images/logo.png"} alt="logo" />
        <h4>ADDRESS</h4>
        <p>KG 17 AVE | Next to Amahoro Stadium</p>

        <h4>PHONE</h4>
        <p>0788 468 107</p>

        <h4>EMAIL</h4>
        <Link className="footer-links" href="#">
          kigaliarena@comingsoon.com
        </Link>
      </div>
    </div>
  );
};

export default Footer;
