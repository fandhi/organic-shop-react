import React, { Component, Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class Counter extends Component {
    // state = {
    //     order: 4,
    //     name: 'Safandhi'
    // }

    // handleCounterChange = (newValue) => {
    //     this.props.onCounterChange(newValue)
    // }

    // handlePlus = () => {
    //     this.setState({
    //         order: this.state.order + 1
    //     }, () => {
    //         this.handleCounterChange(this.state.order)
    //     })
    // }

    // handleMinus = () => {
    //     if (this.state.order > 0) {
    //         this.setState({
    //             order: this.state.order - 1
    //         }, () => {
    //             this.handleCounterChange(this.state.order)
    //         })
    //     }
    // }

    render() {
        console.log('Counter ',this.props)
        return (
            <Fragment>
                <Button variant="primary" onClick={this.props.handleMinus}>-</Button>
                <input className="text-center mr-1 ml-1" type="text" value={this.props.order} />
                <Button variant="primary" onClick={this.props.handlePlus}>+</Button>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({type: 'PLUS_ORDER'}),
        handleMinus: () => dispatch({type: 'MINUS_ORDER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
