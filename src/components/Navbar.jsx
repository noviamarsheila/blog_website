import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1>Blogsh.io</h1>
			<div className="nav-menu">
				<Link to="/">Home</Link>
				<Link to="/add" className="btn">
					Add Blog
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
