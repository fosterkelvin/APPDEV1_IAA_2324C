import React from 'react';
import { useNavigate} from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  }
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#home">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
        </ul>
          <button onClick={handleLogin} class="btn btn-primary">Login</button>
        </div>
    </div>
    </nav>
    <section id='home'>
    <div className='App'>
      <h2>This is the Landing Page</h2>
    </div>
    </section>
    </>
  );
}

export default App;
