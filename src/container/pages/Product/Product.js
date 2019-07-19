import React, { Component, Fragment } from 'react';
import { Nav, Navbar, CardDeck, CardGroup } from 'react-bootstrap';
import { connect } from 'react-redux';

import CardProduct from './CardProduct/CardProduct';
import axios from 'axios';

class Product extends Component {
    state = {
        product: [],
        productFiles: {
            title: '',
            imageUrl: '',
            category: '',
            price: '',
        }
    }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    getProductAPI = () => {
        axios.get('http://localhost:3004/products')
            .then(response => {
                console.log('response product ', response)
                this.setState({
                    product: response.data
                })
            })
    }

    componentDidMount() {
        this.getProductAPI()
    };


    render() {
        return (
            <Fragment>
                <div className="row">
                <CardGroup>
                    {this.state.product.map((product, index) => {
                        return <CardProduct key={index} data={product}
                        // onCounterChange={(value) => this.handleCounterChange(value)} 
                        />
                    })
                    }
                    </CardGroup>
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
