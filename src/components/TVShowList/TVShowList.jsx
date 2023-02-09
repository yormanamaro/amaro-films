import React from 'react'
import TVShowListItem from "../TVShowListItem/TVShowListItem";
import s from './style.module.css';

const TVShowList = ({ onClickItem, TVShowList }) => ( //Se usa solo () ya que es un componente stateleess no maneja logica internamente
  <div>
    <div className={s.title}>You probably like:</div>
    <div className={s.list}>
      {TVShowList.map((tvShow) => {
        return (
          <span key={tvShow.id}>
            <TVShowListItem tvShow={tvShow} onClick={onClickItem} />
          </span>
        );
      })}
    </div>
  </div>
);

export default TVShowList;

