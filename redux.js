// import {  } from 'redux';
const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value: 0,
    age: 17
}

// Reducer
const rootReducer = (state = initialState, action) => {
    // console.log(action)
    // if (action.type === 'CHANGE_VALUE') {
    //     return {
    //         ...state,
    //         value: state.value + action.newValue
    //     }
    // }
    // if (action.type === 'ADD_AGE') {
    //     return {
    //         ...state,
    //         age: state.age + 3
    //     }
    // }
    // return state;
    switch (action.type) {
        case 'CHANGE_VALUE':
            return {
                ...state,
                value: state.value + action.newValue
            }
        case 'ADD_AGE':
            return {
                ...state,
                age: state.age + 1
            }
        default:
            return state;
    }
}

// Store
const store = createStore(rootReducer);
console.log(store.getState())

// Subscription
store.subscribe(() => {
    console.log('store cahange: ', store.getState())
})

// Dispatch
store.dispatch({ type: 'CHANGE_VALUE', newValue: 12 });
store.dispatch({ type: 'ADD_AGE' });
console.log(store.getState())