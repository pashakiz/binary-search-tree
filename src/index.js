import '@scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

const foo = bar => console.log('some...', bar)
foo('bar')

const title = 'Hello World!';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);
