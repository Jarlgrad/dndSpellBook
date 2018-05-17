import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './main.scss';

console.log("Henlo dnd world!");
console.log(process.env["SQLAZURECONNSTR_DbConnection"]);

ReactDOM.render(<App />, document.getElementById('root'));