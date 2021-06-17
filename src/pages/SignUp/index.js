import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../services/api';

import './SignUp.css';

const SignUp = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  async function handleSignUpSubmit(data) {
    try {
      const response = await api.post('/signup', data);
      if (response.status === 200) {
        setIsRegistered(true);
      }
    } catch (error) {
      const err = JSON.parse(error.request.response);
      toast.error(err.message_ptbr);
    }
  }

  return (
    <div className="signup-container">
      { isRegistered ? (
        <div className="success-register">
          <span>Cadastro feito com sucesso!</span>
          <Link to="/" className="form-link">Faça o login</Link>
        </div>
      ) : (
        <>
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
            <ToastContainer />
            <Link to='/' className="form-link">
              <span>Já tem uma conta? Faça o login</span>
            </Link>
          </form>
        </>
      ) }
    </div>
  );
};

export default SignUp;