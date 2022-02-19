import '@scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const foo = bar => console.log('some...', bar)
foo('bar')

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
