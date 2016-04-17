import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import AppState from './components/AppState';
import createReducer from './createReducer';
import { routeAction } from './actionCreators';
import compose from 'ramda/src/compose';
import 'whatwg-fetch';
import Model from './Model';

// Redux devTools activate
const devTool = window.devToolsExtension ? window.devToolsExtension() : f => f;

// Inject local model
const reducer = createReducer(new Model({}));

// Init store
const createStoreWithMiddleware = compose(applyMiddleware(thunkMiddleware), devTool)(createStore);
const store = createStoreWithMiddleware(reducer);

// Render app
ReactDOM.render(
    <Provider store={store}>
        <AppState />
    </Provider>,
    document.getElementById('app')
);
