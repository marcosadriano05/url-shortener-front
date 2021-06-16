import React from 'react';

import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <form className="login-form-container">
        <div className="input-group-container">
          <label>Email</label>
          <input type="email" name="email"/>
        </div>
        <div className="input-group-container">
          <label>Password</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default Home;