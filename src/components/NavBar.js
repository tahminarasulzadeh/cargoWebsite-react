import React, { useContext } from "react";
import { FaPlaneArrival } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import AuthContext from "../store/auth-context";

const Navbar = () => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout()
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to="/">
          <FaPlaneArrival className={classes.plane} />
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink className={classes.a} to="/">
              HOME
            </NavLink>
            {/* <NavLink className={classes.a} to="/user-profile">
        YOUR USER PROFILE
            </NavLink> */}

            <NavLink className={classes.a} to="/about">
              ABOUT
            </NavLink>

            <NavLink className={classes.a} to="/contact">
              CONTACT US
            </NavLink>
            <NavLink className={classes.a} to="/service">
              OUR SERVICE
            </NavLink>
          </ul>

          <form className="d-flex">
            {authCtx.isLoggedIn && (
              <NavLink to="/user-profile">
                <FaUser className={classes.fa} />
              </NavLink>
            )}

            {!authCtx.isLoggedIn && (
              <NavLink to="/login">
            <button className="btn btn-outline-light me-3" id={classes.navLogin} onClick ={logoutHandler}>Log in</button>
                
              </NavLink>
            )}
           
           {authCtx.isLoggedIn && (
             <li>
            <button className="btn btn-outline-light me-3" id={classes.navBtn} onClick ={logoutHandler}>Log out</button>

             </li>

           )

           }
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
