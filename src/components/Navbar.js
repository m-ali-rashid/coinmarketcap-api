import React from 'react'
import {NavLink} from 'react-router-dom'
import Logo from '../images/logo.png'

const Navbar = () => {
	let imageStyle = {
		height: '40px'
	}
	return (
		<nav className = "navbar navbar-dark bg-primary navbar-expand-lg" >
			<div className="container">
				<NavLink className="navbar-brand" to="/">
					<img src={Logo} alt="Crypto Info" style={imageStyle} />CrypTo inFo
				</NavLink>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink className="nav-link" to="/">Home</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/top/1/10">Top 100</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
