import React from 'react';

import './CardUrl.css';

const CardUrl = ({ original_url, shorted_url, created_at }) => {
  const date = new Date(created_at);
  const utc_offset = date.getTimezoneOffset();
  date.setMinutes(date.getMinutes() - utc_offset);
  
  const dateString = `${
    String(date.getDay()).padStart(2, '0')
  }/${
    String(date.getMonth()).padStart(2, '0')
  }/${date.getUTCFullYear()} às ${
    String(date.getUTCHours()).padStart(2, '0')
  }:${
    String(date.getUTCMinutes()).padStart(2, '0')
  }:${
    String(date.getUTCSeconds()).padStart(2, '0')
  }`;

  return (
    <article>
      <span>URL original</span>
      <a href={ original_url } rel="noreferrer" target="_blank" className="form-link">{ original_url }</a>
      <span>URL curta</span>
      <a href={ shorted_url } rel="noreferrer" target="_blank" className="form-link">{ shorted_url }</a>
      <span>Data de criação</span>
      <p>{ dateString }</p>
    </article>
  );
};

export default CardUrl;