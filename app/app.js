import React from 'react';
import ReactDOM from 'react-dom';

import style from './scss/style.scss';
import BootStrap from 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';

const app = document.createElement('div');
app.className = "main-wrapper";
document.body.appendChild(app);

ReactDOM.render(
    <App/>,
    app
);

