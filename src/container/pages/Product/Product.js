import React, { Component, Fragment } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';

import CardProduct from './CardProduct/CardProduct';

class Product extends Component {
    // state = {
    //     order: 4,
    //     name: 'Safandhi'
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render() {
        return (
            <Fragment>
                <div className="col-lg-9 col-md-8">
                    <CardProduct
                    // onCounterChange={(value) => this.handleCounterChange(value)} 
                    />
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps)(Product);
