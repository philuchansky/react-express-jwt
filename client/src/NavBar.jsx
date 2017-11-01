import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
	return (
		<div className='NavBar'>
			<Link to="/">Home</Link>
			<Link to="/login">Log In</Link>
			<Link to="/signup">Sign Up</Link>
			<Link to="/vip">VIP</Link>
		</div>
	)
}

export default NavBar