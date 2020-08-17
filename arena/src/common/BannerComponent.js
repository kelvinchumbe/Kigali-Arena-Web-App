import React from "react";
import { apiUrl } from "../utils/config";
import { Navbar, Nav, NavItem, NavbarBrand } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="nav-bar">
        <Navbar expand="md">
          <NavbarBrand href="/">
            <div className="logo">
              <img src={apiUrl + "images/logo.png"} alt="Kigali Arena Logo" />
            </div>
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/home" className="nav-link">
                HOME
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/events" className="nav-link">
                EVENTS
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/aboutus" className="nav-link">
                ABOUT US
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/booking" className="nav-link">
                BOOKING
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/guest" className="nav-link">
                GUEST
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    </div>
  );
};

const Featured = (props) => {
  console.log(props.events.isFetching);

  if (!props.events.isFetching) {
    const featured = props.events.events.filter((event) => event.featured)[0];
    var date = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      weekday: "long",
    }).format(new Date(Date.parse(featured.date)));

    date = date.split(" ");

    if (featured.length !== 0) {
      return (
        <div className="featured">
          <div className="container">
            <div className="row">
              <h3 className="col-lg-7 col-sm-12">{featured.name}</h3>

              <div className="col-lg-4 offset-lg-1 col2">
                <h3 className="date">
                  {date[1].toUpperCase() + " " + date[2]}
                </h3>
                <h3 className="day">{date[0].split(",")[0]}</h3>
                <Link to="/" className="bttn">
                  <button>GET TICKETS</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  } else {
    return <div></div>;
  }
};

const Banner = (props) => {
  return (
    <div className="banner">
      <div className="banner-content">
        <Header />
        <Featured events={props.events} />
      </div>
    </div>
  );
};

export default Banner;
