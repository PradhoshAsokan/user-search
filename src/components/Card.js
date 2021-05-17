import React from 'react';
import './Card.css'

const Card = ({ name, email, id }) => {
  return (
    <div className='tc bg-white dib br3 pa4 ma2 grow bw2 shadow-5'>
      <img alt='users' src={`https://robohash.org/${id}?size=200x200`} />
      <div className='font'>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;