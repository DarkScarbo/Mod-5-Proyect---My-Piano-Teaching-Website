import React from "react";

import { Link } from "react-router-dom";

const Navbar = props => (
  <div>
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/reviews">Review</Link>
    <Link to="/lessons">Lessons</Link>
    <Link to="/contact">Contact</Link>
  </div>
);

export default Navbar;
