import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import Counter from './Counter';

class CardProduct extends Component {
    render() {
        return (
            <div className="col-lg-9 col-md-8">
                <Card className="border-0 shadow-sm mb-1">
                    <Card.Img variant="top" src="http://www.publicdomainpictures.net/pictures/170000/velka/spinach-leaves-1461774375kTU.jpg" />
                    <Card.Body>
                        <Card.Title>Spinach</Card.Title>
                        <Card.Text>Spinach Spinach Spinach Spinach</Card.Text>
                        <Counter />
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default CardProduct;
