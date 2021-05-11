import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router } from 'react-router-dom';
import { CleanerProvider } from './context';
ReactDOM.render(
  <React.StrictMode>
    <CleanerProvider>
    <Router basename="/WeClean">
      <App />
    </Router>
    </CleanerProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


