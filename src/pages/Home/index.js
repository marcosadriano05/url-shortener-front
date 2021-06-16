import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import api from '../../services/api';

import './Home.css';

const Home = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isReqError, setIsReqError] = useState(false);

  async function handleLoginSubmit(data) {
    try {
      const response = await api.post('/login', data);
      console.log(response);
    } catch (error) {
      console.log(error);
      setIsReqError(true);
    }
  }

  console.log(errors);

  return (
    <div className="home-container">
      <form className="login-form-container" onSubmit={handleSubmit(handleLoginSubmit)}>
        <h2>Acesse com sua conta</h2>
        <div className="input-group-container">
          <label>Email</label>
          <input type="email" {...register("email", { required: true })} placeholder="Type your email" />
          { isReqError && <span className="alert-form-message">Credencial inválida</span> }
        </div>
        <div className="input-group-container">
          <label>Senha</label>
          <input type="password" {...register("password", { required: true })} placeholder="Type your password" />
          { isReqError && <span className="alert-form-message">Credencial inválida</span> }
        </div>
        <button type="submit" className="form-button">Entrar</button>
        <Link to='/signup' className="form-link">
          <span>Ou crie uma conta</span>
        </Link>
      </form>
    </div>
  );
};

export default Home;