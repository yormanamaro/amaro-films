import React from 'react'
import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import s from "./style.module.css";

const TVShowListItem = ({ tvShow , onClick }) => {
  
  const MAX_TITLE_CHAR = 20; // Esto es para que el titulo de cada serie no supere los 20 caracteres si se pasa le pone .....
  
  const onClick_ = () => {
    onClick(tvShow);
  };

  return (
    <div onClick={onClick_} className={s.container}>
      <img 
      alt={tvShow.name}
      src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
      className={s.img}
      />
      <div className={s.title}>
        {tvShow.name.length > MAX_TITLE_CHAR
          ? tvShow.name.slice(0, MAX_TITLE_CHAR) + "..."
          : tvShow.name}
      </div>
    </div>
  ); 
};

export default TVShowListItem;

