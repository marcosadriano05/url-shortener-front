import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../services/api';

import './Home.css';

const Home = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const history = useHistory();
  
  useEffect(() => {
    const token = localStorage.getItem('token_url_shortener');
    if (token) {
      history.push('/dashboard');
    }
  }, [history]);

  async function handleLoginSubmit(data) {
    try {
      const response = await api.post('/login', data);

      if (response.status === 200 && response.data.token) {
        localStorage.setItem('token_url_shortener', response.data.token);
        history.push('/dashboard');
      }
    } catch (error) {
      const err = JSON.parse(error.request.response);
      toast.error(err.message_ptbr);
    }
  }

  return (
    <div className="home-container">
      <form className="login-form-container" onSubmit={handleSubmit(handleLoginSubmit)}>
        <h2>Acesse com sua conta</h2>

        <div className="input-group-container">
          <label>Email</label>
          <input type="email" {...register("email", { required: true })} placeholder="Digite seu email" />
          { (errors.email && errors.email.type === 'required') && ( 
            <span className="alert-form-message">Email é obrigatório</span> 
          ) }
        </div>

        <div className="input-group-container">
          <label>Senha</label>
          <input type="password" {...register("password", { required: true })} placeholder="Digite sua senha" />
          { (errors.password && errors.password.type === 'required') && ( 
            <span className="alert-form-message">Senha é obrigatória</span> 
          ) }
        </div>

        <button type="submit" className="form-button">Entrar</button>
        <ToastContainer />
        <Link to='/signup' className="form-link">
          <span>Ou crie uma conta</span>
        </Link>
      </form>
    </div>
  );
};

export default Home;