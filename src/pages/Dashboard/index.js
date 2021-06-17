import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import api from '../../services/api';

import './Dashboard.css';

const Dashboard = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const history = useHistory();

  useEffect(() => {
    (async function isUserAuth () {
      try {
        const token = localStorage.getItem('token');
        const response = await api.get('/auth', { 
          headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (!response.data.isAuth) {
          history.push('/');
        }
      } catch (error) {
        history.push('/');
      }
    })();
  }, [history]);

  function handleUrlSubmit(data) {}

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <nav className="nav-header">
          <button type="button" className="nav-button">Sair</button>
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
    </div>
  );
};

export default Dashboard;