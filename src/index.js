import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = {
    totalOrder: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ('PLUS_ORDER'):
            return {
                ...state,
                totalOrder: state.totalOrder + 1
            }
        case ('MINUS_ORDER'):
            let totalOrder = 0;
            if(state.totalOrder > 0) {
                totalOrder= state.totalOrder - 1
            }
            return {
                ...state,
                totalOrder: totalOrder
            }
        default:
            return state;
    }
}

// Store
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
