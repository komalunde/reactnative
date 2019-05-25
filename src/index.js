import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timeline from './components/Timeline/Timeline';

export const load = () => {
  ReactDOM.render(<Timeline />, document.getElementById('demo1'));
};

try {
  load();
} catch (e) {}