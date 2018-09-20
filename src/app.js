import isSenior, { isAdult, canDrink } from './playground/person.js';
import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './components/MyApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<MyApp />, document.getElementById('body'))