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
      
      if (response.data.token) {
        console.log(response.data.token);
      }
    } catch (error) {
      setIsReqError(true);
    }
  }

  if (isReqError) {
    setTimeout(() => {
      setIsReqError(false);
    }, 5000);
  }

  return (
    <div className="home-container">
      { isReqError && (
        <div className="card-error-info">
          <span>Email ou senha inválidos</span>
          <button type="button" onClick={ () => setIsReqError(false) }>X</button>
        </div>
      ) }

      <form className="login-form-container" onSubmit={handleSubmit(handleLoginSubmit)}>
        <h2>Acesse com sua conta</h2>

        <div className="input-group-container">
          <label>Email</label>
          <input type="email" {...register("email", { required: true })} placeholder="Type your email" />
          { (errors.email && errors.email.type === 'required') && ( 
            <span className="alert-form-message">Email é obrigatório</span> 
          ) }
        </div>

        <div className="input-group-container">
          <label>Senha</label>
          <input type="password" {...register("password", { required: true })} placeholder="Type your password" />
          { (errors.password && errors.password.type === 'required') && ( 
            <span className="alert-form-message">Senha é obrigatória</span> 
          ) }
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