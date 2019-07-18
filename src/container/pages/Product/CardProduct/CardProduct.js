import React, { Component } from 'react';
import { Card, CardDeck } from 'react-bootstrap';

import Counter from './Counter';

const CardProduct = (props) => {
    // render() {
    return (
        // <div className="mb-1 col-lg-3 col-md-3">
        
            <Card className="border-0 shadow">
                <Card.Img variant="top" src={props.data.imageUrl} />
                <Card.Body>
                    <Card.Title>{props.data.title}</Card.Title>
                    <Card.Text>Category: {props.data.category}</Card.Text>
                    <Card.Text>$ {props.data.price}</Card.Text>
                    <Counter />
                </Card.Body>
            </Card>
        // </div>
    );
    // }
}

export default CardProduct;
