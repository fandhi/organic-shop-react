import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Brand link</Navbar.Brand>
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Nav.Link href="#pricing">{this.props.order}</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

const mapStateToProps = state => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps)(Header);
