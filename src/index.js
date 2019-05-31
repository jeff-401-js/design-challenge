import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

// Core
// Mixins, Base, Vars, Mobile Defs
import './design/design.scss';

function Main() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
