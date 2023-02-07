import React from 'react'
import FiveStartRating from "../FiveStartRating/FiveStartRating"; // Necesitamos traernos el componente de las estrellas
import s from './style.module.css';

const TVShowDetail = ({ tvShow }) => { // Vamos a trabajar con logica y comportamiento propio

  const rating = tvShow.vote_average / 2;  // Aqui nos traemos el rating de la APItmdb (vote_average)
  
  return( 
    <div>
      <div className={s.title}>{tvShow.name}</div>
      <div className={s.rating_container}>
        <FiveStartRating // Aqui estamos inyectando el componente de las estrellas y pasandole la props rating de arriba.
          rating={rating}
        /> 
        <span className={s.rating}>{rating}/5</span> 
      </div>
      <div className={s.overview}>{tvShow.overview}</div>
    </div>
  )
};   

export default TVShowDetail
