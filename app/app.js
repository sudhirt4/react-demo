import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';

import App from './components/App';

const app = document.createElement('div');
app.className = "main-wrapper";
document.body.appendChild(app);

ReactDOM.render(
    <App/>,
    app
);

