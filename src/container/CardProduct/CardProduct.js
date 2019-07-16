import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';

class CardProduct extends Component {
    state = {
        order: 4,
        name: 'Safandhi'
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order)
        })
    }

    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order)
            })
        }
    }

    render() {
        return (
            <div className="col-lg-9 col-md-8">
                <Card className="border-0 shadow-sm mb-1">
                    <Card.Img variant="top" src="http://www.publicdomainpictures.net/pictures/170000/velka/spinach-leaves-1461774375kTU.jpg" />
                    <Card.Body>
                        <Card.Title>Spinach</Card.Title>
                        <Card.Text>Spinach Spinach Spinach Spinach</Card.Text>
                        <Button variant="primary" onClick={this.handleMinus}>-</Button>
                        <input className="text-center mr-1 ml-1" type="text" value={this.state.order} />
                        <Button variant="primary" onClick={this.handlePlus}>+</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default CardProduct;
