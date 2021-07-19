'use strict';

import { createStore } from 'redux';

console.log('APP STARTED');

const defaultState = {
    balance: 0,
};

// Actions
const actionIncrement = {
    type: 'INCREMENT'
}

const actionDecrement = {
    type: 'DECREMENT',
};

// Reducer
const account = (state = defaultState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                balance: state.balance + 1
            };
        case 'DECREMENT':
            return {
                balance: state.balance - 1
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

store.dispatch(actionIncrement);
store.dispatch(actionIncrement);
store.dispatch(actionDecrement);

console.log('Store state value is: ', store.getState());