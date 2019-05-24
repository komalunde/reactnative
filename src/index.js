import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';

export const load = () => {
  ReactDOM.render(
      <Root />,
    document.getElementById('demo1')
  );
  ReactDOM.render(
      <Root />,
    document.getElementById('demo2')
  );
};

try {
  load();
} catch (e) {
  console.log(e);
}