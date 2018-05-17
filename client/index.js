import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './main.scss';
import '../webpack.config';

console.log("Henlo dnd world!");

ReactDOM.render(<App />, document.getElementById('root'));