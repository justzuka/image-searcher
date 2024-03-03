import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="navbar-container">
			<Link className="navbar-button" to="/">
				home
			</Link>
			<Link className="navbar-button" to="/history">
				history
			</Link>
		</div>
	);
};

export default Navbar;
