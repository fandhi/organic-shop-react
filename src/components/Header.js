import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = (props) => {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Brand link</Navbar.Brand>
                <Nav>
                    <Nav.Link href="">4{props.order}</Nav.Link>
                </Nav>
            </Navbar>
        );
}

export default Header;
