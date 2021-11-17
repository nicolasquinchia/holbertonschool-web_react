import React from 'react';
import './App.css';
import hbtonlogo from '../assets/holberton-logo.jpg';
import { getFullYear, getFooterCopy } from '../utils/utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={hbtonlogo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email</label>
        <input type="text" id="email"/>
        <label htmlFor='password'>Password</label>
        <input type="password" id="password"/>
        <button >OK</button>
      </div>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </footer>
    </div>
  );
}

export default App;
