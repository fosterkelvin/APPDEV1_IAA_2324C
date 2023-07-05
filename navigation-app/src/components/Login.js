import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bounce from '../bounce.png';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const users = [{ username: 'Kel', password: 'qwerty' }];

  const handleRedirect = () => {
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);

    if (account && account.password === password) {
      localStorage.setItem('authenticated', true);
      navigate('/dashboard');
    }
  }
  return (
    <div className="App ">
      <div className="container border border-secondary p-3 mx-auto m-4" style={{ width: '600px' }}>
        <div className="container-fluid position-relative">
          <button class="btn btn-secondary" onClick={handleRedirect} style={{ position: 'absolute', top: 0, left: 0 }}>
            Back
          </button>
        </div>
        <h2>Welcome to One Piece</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="Username">Username</label>
            <input
              className="form-control"
              type="Username"
              name="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <br />
            <label htmlFor="Password">Password</label>
            <input
              className="form-control"
              type="password"
              name="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <input type="submit" value="Submit" className="btn btn-success"/>
          </div>
        </form>
      </div>
      <img src={bounce} className="App-logo luffy" alt="logo" />
    </div>

  );
};

export default Login;
