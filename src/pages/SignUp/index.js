import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import api from '../../services/api';

import './SignUp.css';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isReqError, setIsReqError] = useState(false);
  const [resMessage, setResMessage] = useState('');

  const history = useHistory();

  async function handleSignUpSubmit(data) {
    try {
      const response = await api.post('/signup', data);
      if (response.status === 200) {
        history.push('/');
      }
    } catch (error) {
      const err = JSON.parse(error.request.response);
      setResMessage(err.message_ptbr);
      setIsReqError(true);
    }
  }

  if (isReqError) {
    setTimeout(() => {
      setIsReqError(false);
    }, 5000);
  }

  return (
    <div className="signup-container">
      { isReqError && (
        <div className="card-error-info">
          <span>{resMessage}</span>
          <button type="button" onClick={ () => setIsReqError(false) }>X</button>
        </div>
      ) }

      <form className="signup-form-container" onSubmit={handleSubmit(handleSignUpSubmit)}>
        <h2>Crie sua conta</h2>

        <div className="input-group-container">
          <label>Nome</label>
          <input type="text" {...register("name", { required: true })} placeholder="Digite seu nome" />
          { (errors.name && errors.name.type === 'required') && ( 
            <span className="alert-form-message">Nome é obrigatório</span> 
          ) }
        </div>

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

        <div className="input-group-container">
          <label>Confirmar senha</label>
          <input type="password" {...register("same_password", { required: true })} placeholder="Confirme sua senha" />
          { (errors.same_password && errors.same_password.type === 'required') && ( 
            <span className="alert-form-message">Senha é obrigatória</span> 
          ) }
        </div>
        
        <button type="submit" className="form-button">Cadastrar</button>
        <Link to='/' className="form-link">
          <span>Já tem uma conta? Faça o login</span>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;