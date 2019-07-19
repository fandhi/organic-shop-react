import React, { Component } from 'react';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Brand link</Navbar.Brand>
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                <Badge pill variant="warning">{this.props.order}</Badge>
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
