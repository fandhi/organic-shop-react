import React, { Component, Fragment } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import CardProduct from '../../CardProduct/CardProduct';

class Product extends Component {
    state = {
        order: 4,
        name: 'Safandhi'
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render() {
        return (
            <Fragment>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#deets">{this.state.order}</Nav.Link>
                    </Nav>
                </Navbar>
                <div className="col-lg-9 col-md-8">
                    <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
                </div>
            </Fragment>
        );
    }
}

export default Product;
