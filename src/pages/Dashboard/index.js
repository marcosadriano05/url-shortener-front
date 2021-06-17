import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import api from '../../services/api';

import './Dashboard.css';

const Dashboard = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isAuth, setIsAuth] = useState(false);

  const history = useHistory();

  useEffect(() => {
    (async function isUserAuth () {
      try {
        const token = localStorage.getItem('token_url_shortener');
        const response = await api.get('/auth', { 
          headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (response.data.isAuth) {
          setIsAuth(true);
        }
      } catch (error) {
        localStorage.removeItem('token_url_shortener');
        setIsAuth(false);
      }
    })();
  }, []);

  async function handleUrlSubmit(data) {
    try {
      const token = localStorage.getItem('token_url_shortener');
      const response = await api.post('/userurl', data, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      console.log(response);
    } catch (error) {
      const err = error.request.response;
      console.log(err);
    }
  }

  function removeToken() {
    localStorage.removeItem('token_url_shortener');
    setIsAuth(false);
    history.push('/');
  }

  return (
    <div className="dashboard-container">
      { !isAuth ? (
        <div className="noauth-message">
          <span>Faça o login para poder acessara aplicação</span>
          <Link to="/" className="form-link">Página de Login</Link>
        </div>
      ) : (  
        <>
          <div className="dashboard-header">
            <h1>Dashboard</h1>
            <nav className="nav-header">
              <button type="button" className="nav-button" onClick={removeToken}>Sair</button>
            </nav>
          </div>

          <form className="dashboard-form-container" onSubmit={handleSubmit(handleUrlSubmit)}>
            <h2>Gere uma URL curta</h2>

            <div className="input-group-container">
              <label>URL</label>
              <input type="text" {...register("url", { required: true })} placeholder="Digite aqui sua URL" />
              { (errors.url && errors.url.type === 'required') && ( 
                <span className="alert-form-message">URL é obrigatória</span> 
              ) }
            </div>

            <button type="submit" className="form-button">Gerar URL</button>
          </form>
        </>
      ) }
    </div>
  );
};

export default Dashboard;