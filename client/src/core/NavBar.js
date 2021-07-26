import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { Link, withRouter } from "react-router-dom";
import { isAuth, signout } from "../auth/helpers";

function MainNavBar({ children, match, history }) {
  const [click, setClick] = useState(false);

  const isActive = (path) => {
    if (match.path === path) {
      return { color: "#000" };
    } else {
      return { color: "#fff" };
    }
  };

  const handleClick = () => setClick(!click);

  const nav = () => (
    <nav className="navbar-new">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          MyFamilyLogo
          <i className="fas fa-code"></i>
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {isAuth() && (
            <li className="nav-item">
              <Link
                exact
                to="/home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                style={isActive("/home")}
              >
                Home
              </Link>
            </li>
          )}

          {isAuth() && (
            <li className="nav-item">
              <Link
                exact
                to="/dairy"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                style={isActive("/dairy")}
              >
                Dairy
              </Link>
            </li>
          )}

          {isAuth() && (
            <li className="nav-item">
              <Link
                to="/events"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                style={isActive("/events")}
              >
                Event
              </Link>
            </li>
          )}

          {isAuth() && (
            <li className="nav-item">
              <Link
                to="/gallery"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                style={isActive("/gallery")}
              >
                Gallery
              </Link>
            </li>
          )}

          {isAuth() && (
            <li className="nav-item">
              <Link
                to="/invite"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                style={isActive("/invite")}
              >
                Invite
              </Link>
            </li>
          )}

          {!isAuth() && (
            <Fragment>
              <li className="nav-item">
                <Link
                  to="/signin"
                  activeClassName="active"
                  className=" nav-links"
                  style={isActive("/signin")}
                >
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/signup"
                  activeClassName="active"
                  className="nav-links"
                  style={isActive("/signup")}
                >
                  Sign Up
                </Link>
              </li>
            </Fragment>
          )}

          {isAuth() && isAuth().role === "admin" && (
            <li className="nav-item">
              <Link
                to="/admin"
                className="nav-links"
                style={isActive("/admin")}
              >
                {isAuth().name}
              </Link>
            </li>
          )}

          {isAuth() && isAuth().role === "subscriber" && (
            <li className="nav-item">
              <Link
                to="/private"
                className="nav-links"
                style={isActive("/private")}
              >
                {isAuth().name}
              </Link>
            </li>
          )}

          {isAuth() && (
            <li className=" nav-item">
              <span
                className="nav-links"
                style={{ cursor: "pointer", color: "#fff" }}
                onClick={() => {
                  signout(() => {
                    history.push("/");
                  });
                }}
              >
                Sign Out
              </span>
            </li>
          )}
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );

  return (
    <Fragment>
      {nav()}
      <div className="container">{children}</div>
    </Fragment>
  );
}

export default withRouter(MainNavBar);
