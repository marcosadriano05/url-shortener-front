import React from 'react';

import './CardUrl.css';

const CardUrl = ({ original_url, shorted_url, created_at }) => {
  const date = new Date(created_at);
  const utc_offset = date.getTimezoneOffset();
  date.setMinutes(date.getMinutes() - utc_offset);
  
  const dataArraySplited = date.toString().split(' ')
  const dataString = `${dataArraySplited[2]}/${dataArraySplited[1]}/${dataArraySplited[3]}`
  const timeString = `${dataArraySplited[4]}`

  return (
    <article>
      <span>URL original</span>
      <a href={ original_url } rel="noreferrer" target="_blank" className="form-link">{ original_url }</a>
      <span>URL curta</span>
      <a href={ shorted_url } rel="noreferrer" target="_blank" className="form-link">{ shorted_url }</a>
      <span>Data de criação</span>
      <p>{ `${dataString} às ${timeString}` }</p>
    </article>
  );
};

export default CardUrl;