import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import bounce from '../bounce.png';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const users = [{ username: 'Kel', password: 'qwerty' }];

  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);

    if (account && account.password === password) {
      localStorage.setItem('authenticated', true);
      navigate('/dashboard');
    }
  };

  if (localStorage.getItem('authenticated')) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="App">
      <h2>Welcome to Login</h2>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="Username">Username</label>
            <input
              className="form-control"
              type="Username"
              name="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <label htmlFor="Password">Password</label>
            <input
              className="form-control"
              type="password"
              name="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <img src={bounce} className="App-logo luffy" alt="logo" />
    </div>
  );
};

export default Login;
