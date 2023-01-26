import { useState, useEffect } from 'react';
import SearchBar from "./components/SearchBar/SearchBar";
import TVShowList from "./components/TVShowList/TVShowList";
import Logo from "./components/Logo/Logo";
import TVShowDetail from "./components/TVShowDetail/TVShowDetail";
import { TVShowAPI } from "./api/tv-show";
import logoImg from "./assets/images/logo.png"
import {BACKDROP_BASE_URL} from "./config";
import s from "./style.module.css";

function App() {
  const [currentTVShow, setCurrentTVShow] = useState(); // Aqui se crean propiedades para manejar el estado de la serie mas popular recuerden que va cambiando por popularidad se llamara (currentTVShow) 

  async function fetchPopulars() { // Estamos haciendo uso de la clase fetchPopulars creada en el archivo de tv-show.js de la api que la dejamos exportada con el nombre de (TVShowAPI). 
    const popularTVShowList = await TVShowAPI.fetchPopulars(); // Vamos almacenar el resultado de la peticion y el await para esperar que nos responda la peticion
    if (popularTVShowList && popularTVShowList.length > 0) {  // Se pregunta si la lista es mayor a 0 su cantidad en concreto
      setCurrentTVShow(popularTVShowList[0]); // y si es mayor a 0 actualizar el mas popular y mostrar el primero, para actualizar su modificador setcurrentTVShow
    }
  }

  console.log(currentTVShow); // Para ver donde esta ubicada esa imagen dentro del contexto del objeto.

  useEffect(() => { // Es necesario llamar a useffect ya que esa serie popular va a cambiar nunca sera la misma ya que si otra tiene mas puntaje sera esa y asi...
    fetchPopulars();
  }, []) // No se agrega nada en el array por que no se estan manejando dependencias, solo una hacia la lista fetchPopulars y eso lo da la api, si fuera un adi creado

  return (
    <div
    className={s.main_container} 
    style={{
      background: currentTVShow // Va a estar situado en un constexto de si tenemos informacion del currentTVShow
        ? `linear-gradient(rgba(0, 0, 0, 0.100), rgba(0, 0, 0, 0.100)), 
          url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover` 
        : "black",  
    }} // Se realizo un operador ternario para mostrar o no la imagen del currentTVShow
    >
      <div className={s.header}> 
        <div className="row">
          <div className="col-4">
            <Logo 
              title="WatchShows"
              image={logoImg}
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar />
          </div>
          <div className={s.tv_show_details}>
            {currentTVShow && <TVShowDetail tvshow={currentTVShow} />}
          </div>
          <div className={s.recommended_shows}>
            {currentTVShow && (
              <TVShowList 
              
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App

