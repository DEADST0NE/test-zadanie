import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import Main from './сomponent/Main';
import store from './redux/store';

console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>, document.getElementById('root'));

