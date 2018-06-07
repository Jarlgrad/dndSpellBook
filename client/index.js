import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './main.scss';
import { register } from './registerServiceWorker.js';

console.log("Henlo dnd world!");
// console.log(process.env["SQLAZURECONNSTR_DbConnection"]);

if (process.env.NODE_ENV !== 'production') {
    console.log(process.env.dndTomeApiUrl);
    console.log('Looks like we are in development mode!');
}

ReactDOM.render(<App />, document.getElementById('root'));

register();