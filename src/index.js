import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/pages/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import history from "./history";

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

