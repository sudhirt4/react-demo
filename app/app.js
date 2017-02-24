import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap';

import './scss/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';

const app = document.createElement('div');
app.className = "main-wrapper";
document.body.appendChild(app);

ReactDOM.render(
    <App/>,
    app
);

