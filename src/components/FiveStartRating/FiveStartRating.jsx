import React from 'react';
import { StarFill, Star as StarEmpty  } from "react-bootstrap-icons"; // Esos son componentes de bootstrap icon 


const FiveStartRating = ({ rating }) => { // rating = 4.45
// Declarar star icon array
const starList = [];

// Numero de estrellas filtradas
const starFillCount = Math.floor(rating); // 4 

// Paso 1: Si tiene o no al menos la mitad de la estrella // 4.45 - 4 = 0.45 >= 0.5 = false esta es la logica para pintar las estrellas en base al reting
const hasHalfStar = rating - parseInt(rating) >= 0.5; // Esto es para saber si dejamos estrellas vacias o no y que me va a pintar 

// Paso 2: store the number of empty stars // Esta es para las estrellas vacias
const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0); // 5 - 4 = 1 - 0 = 1 Es este caso va a pintar 1 estrella

// agregar las estrellas al arreglo starList, es decir, llenarlas
for (let i = 1; i <= starFillCount; i++) {
  starList.push(<StarFill key={"star-fill + i"} />); // En este paso lo que estamos haciendo es empujando la logica de las estrellas al componente de estrellas de boottrap
}

// Para empujar estrellas vacias
for (let i = 1; i <= emptyStarCount; i++) {
  starList.push(<StarEmpty key={"star-empty + i"} />); // Aqui se hace lo mismo del paso anterior pero este es para pintar las estrellas faltantes pero vacias
}

  return <div>{starList}</div>;
};

export default FiveStartRating;