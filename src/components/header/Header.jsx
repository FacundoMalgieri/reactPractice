import React, {Component} from 'react';
import logo from '../../q.png';
import {Link} from "react-router-dom";
import './Header.css'
import {Nav, Navbar, NavItem} from "react-bootstrap";

class Header extends Component {
	render() {
		return (
			<Navbar className="bg-white text-black no-border-radius" inverse collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/"><img src={logo} className="logo" alt="logo"/></Link>
					</Navbar.Brand>
					<Navbar.Toggle/>
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight className="text-center">
						<NavItem componentClass="span" eventKey={1} href="#">
							<Link to="home" className="header-link">Home</Link>
						</NavItem>
						<NavItem componentClass="span" eventKey={2} href="#">
							<Link to="users" className="header-link">Users</Link>
						</NavItem>
						<NavItem componentClass="span" eventKey={3} href="#">
							<Link to="about" className="header-link">About</Link>
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;
