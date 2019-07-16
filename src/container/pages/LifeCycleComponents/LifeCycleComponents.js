import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class LifeCycleComponents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 1
      };
      console.log('constructor')
    };

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null
    }
    componentDidMount() {
      console.log('componentDidMount')
    //   this.setState({
    //       count: 2
    //   })
    };
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        console.log('nextProps ', nextProps);
        console.log('nextState ', nextState);
        console.log('this.state ', this.state);
        console.groupEnd();
        if(nextState.count >= 4) {
            return false;
        }
        return true;
    }
    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    };
    componentWillUnMount = () => {
        console.log('componentWillUnMount')
    };
    
    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    
  render() {
      console.log('render')
    return (
      <div>
          <Button variant="primary" onClick={this.changeCount}>Button {this.state.count}</Button>
      </div>
    );
  }
}

export default LifeCycleComponents;
