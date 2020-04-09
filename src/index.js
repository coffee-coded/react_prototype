import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Idea from './idea.js';
import * as serviceWorker from './serviceWorker';
import Up from './signup';

ReactDOM.render(
    <Up />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
