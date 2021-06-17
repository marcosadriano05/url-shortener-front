import React from 'react';

import './CardUrl.css';

const CardUrl = ({ original_url, shorted_url, created_at }) => {
  return (
    <article>
      <span>URL original</span>
      <a href={ original_url } rel="noreferrer" target="_blank" className="form-link">{ original_url }</a>
      <span>URL curta</span>
      <a href={ shorted_url } rel="noreferrer" target="_blank" className="form-link">{ shorted_url }</a>
      <span>Data de criação</span>
      <p>Data</p>
    </article>
  );
};

export default CardUrl;