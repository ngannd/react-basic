import React from 'react'
import "./Nav.scss"
import { NavLink } from "react-router-dom";
class Nav extends React.Component {
	render() {
		return (
			<div className="topnav">
				<NavLink exact={true} to="/">Home</NavLink>
				<NavLink to="/Todos">Todos</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/user">User</NavLink>
			</div>
		)
	}
}
export default Nav;