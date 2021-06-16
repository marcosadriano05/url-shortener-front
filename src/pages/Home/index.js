import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <form className="login-form-container">
        <h2>Enter with your account</h2>
        <div className="input-group-container">
          <label>Email</label>
          <input type="email" name="email" placeholder="Type your email" />
        </div>
        <div className="input-group-container">
          <label>Password</label>
          <input type="password" name="password" placeholder="Type your password" />
        </div>
        <button type="submit" className="form-button">Sign in</button>
        <Link to='/signup' className="form-link">
          <span>Or Create a new account here</span>
        </Link>
      </form>
    </div>
  );
};

export default Home;