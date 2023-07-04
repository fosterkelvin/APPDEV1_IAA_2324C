import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App position-absolute top-50 start-50">
      <Link to="/login">
        <button class="btn btn-primary mb-3">Login</button>
      </Link>
    </div>
  );
}

export default App;
