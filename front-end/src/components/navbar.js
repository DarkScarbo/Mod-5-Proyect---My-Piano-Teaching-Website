import React from "react";
import UserContainer from "./user_container";

import { Link } from "react-router-dom";

const Navbar = props => (
  <div>
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/reviews">Review</Link>
    <Link to="/lessons">Lessons</Link>
    <Link to="/contact">Contact</Link>
    {props.logedIn && <Link to="/mySpace">My Space</Link>}
    <UserContainer
      logIn={props.logIn}
      logOut={props.logOut}
      logedIn={props.logedIn}
      name={props.name}
    />
  </div>
);

export default Navbar;
