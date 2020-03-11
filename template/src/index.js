import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import bossReducer from './reducers/bossReducer';
import './styles/styles.css';

const store = createStore(bossReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
