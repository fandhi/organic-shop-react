import React, { Component, Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import ActionType from '../../../../redux/reducer/globalActionType';

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
            <div className="d-flex">
                <Button variant="primary" size="sm" className="flex-fill" onClick={this.props.handleMinus}>-</Button>
                <input className="text-center mr-1 ml-1 form-control flex-fill" type="text" value={this.props.order} />
                <Button variant="primary" size="sm" className="flex-fill" onClick={this.props.handlePlus}>+</Button>
            </div>
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
        handlePlus: () => dispatch({type: ActionType.PLUS_ORDER}),
        handleMinus: () => dispatch({type: ActionType.MINUS_ORDER})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
