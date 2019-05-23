import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RootFirst from './RootFirst';
import Root from './Root';

export const load = () => {
  ReactDOM.render(
      <RootFirst />,
    document.getElementById('demo1')
  );

  ReactDOM.render(
      <Root />,
    document.getElementById('demo2')
  );
};

try {
  load();
} catch (e) {}