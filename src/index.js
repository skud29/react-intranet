import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

import authReducer from './store/reducers/auth';

const rootReducer = () => {
    return {auth: authReducer}
};

const store = createStore(rootReducer);
console.log(store);
console.log(store.getState());

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
