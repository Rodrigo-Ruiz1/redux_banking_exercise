'use strict';

//import { createStore } from 'redux';
const { createStore } = Redux;

console.log('APP STARTED');

const defaultState = {
    balance: 0,
};

// Actions
const actionIncrement = (amount) => {
    return {
        type: 'INCREMENT',
        payload: amount
    }
};

const actionDecrement = (amount) => {
    return {
        type: 'DECREMENT',
        payload: amount
    }
};

// Reducer
const account = (state = defaultState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                balance: state.balance + action.payload
            };
        case 'DECREMENT':
            return {
                balance: state.balance - action.payload
            };
        default:
            return state;
    }
}

const store = createStore(account);
console.log('Store Value is: ', store.getState());

store.subscribe(() => {
    console.log('Watching for state changes...')
    const state = store.getState();
    console.log('Current state ', state);
});

store.dispatch(actionIncrement(100));
store.dispatch(actionIncrement(9));
store.dispatch(actionDecrement(30));


console.log('Store state value is: ', store.getState());