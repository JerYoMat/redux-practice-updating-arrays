import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

const initialState = [
  { id: 0, type: 'SALE', value: 3.99 },
  { id: 1, type: 'REFUND', value: -1.99 },
  { id: 2, type: 'SALE', value: 17.49 }
]


const ConnectedApp = connect(
  mapState,
  mapDispatch
)(SchoolAdmin);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.querySelector('#root')
);

