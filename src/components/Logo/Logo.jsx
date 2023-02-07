import React from 'react'
import s from './style.module.css';

// Este componente lo unico que va hacer es recibir props y rederizar props
// Seria un componente "stateless" sin comportamiento propio.

const Logo = ({title, image}) => ( // se usan () por solo se esta renderizando elementos no hay logica
    <div>
        <div className={s.container}>
            <img className={s.img} src={image} alt='logo' />
            <span className={s.title}>{title}</span>
        </div>
    </div>
);

export default Logo