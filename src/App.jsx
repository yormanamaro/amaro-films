// Este es el orden en que deben ir la importaciones
import { useState, useEffect, useCallback, useMemo } from 'react'; 
import Logo from "./components/Logo/Logo";
import SearchBar from "./components/SearchBar/SearchBar";
import TVShowDetail from "./components/TVShowDetail/TVShowDetail";
import TVShowList from "./components/TVShowList/TVShowList";
import { TVShowAPI } from "./api/tv-show";
import {BACKDROP_BASE_URL} from "./config";
import logoImg from "./assets/images/logo.png"
import s from "./style.module.css";
//

function App() {
  const [currentTVShow, setCurrentTVShow] = useState(); // Aqui se crean propiedades para manejar el estado de la serie mas popular recuerden que va cambiando por popularidad se llamara (currentTVShow)
  const [recomendationList, setRecomentationList ] = useState([]); // Aqui vamos a manejar el estado de la lista de tvshow el cintillo


  // ESTA ES NORMAL VERSION
  async function fetchPopulars() { // Estamos haciendo uso de la clase fetchPopulars creada en el archivo de tv-show.js de la api que la dejamos exportada con el nombre de (TVShowAPI). 
    const popularTVShowList = await TVShowAPI.fetchPopulars(); // Vamos almacenar el resultado de la peticion y el await para esperar que nos responda la peticion
    if (popularTVShowList && popularTVShowList.length > 0) {  // Se pregunta si la lista es mayor a 0 su cantidad en concreto
      setCurrentTVShow(popularTVShowList[0]); // y si es mayor a 0 actualizar el mas popular y mostrar el primero, para actualizar su modificador setcurrentTVShow
    }
  };

  // USECALLBACK VERSION // El resultado es fechpopulars // hace que el procesamiento se mas fluido
  /*const SE INYECTAN LOS NUEVOS HUKS
    const fetchPopulars  = useCallback(async () => {
    const popularTVShowList = await TVShowAPI.fetchPopulars(); // Vamos almacenar el resultado de la peticion y el await para esperar que nos responda la peticion
    if (popularTVShowList && popularTVShowList.length > 0) {  // Se pregunta si la lista es mayor a 0 su cantidad en concreto
      setCurrentTVShow(popularTVShowList[0]); // y si es mayor a 0 actualizar el mas popular y mostrar el primero, para actualizar su modificador setcurrentTVShow
    }
  }, [currentTVShow]);*/


  // USEMEMO VERSION // El resultado es current tv show
  /*const fetchPopulars = useMemo(() => {
    return async () => {
      const popularTVShowList = await TVShowAPI.fetchPopulars(); // Vamos almacenar el resultado de la peticion y el await para esperar que nos responda la peticion
    if (popularTVShowList && popularTVShowList.length > 0) {  // Se pregunta si la lista es mayor a 0 su cantidad en concreto
      setCurrentTVShow(popularTVShowList[0]); // y si es mayor a 0 actualizar el mas popular y mostrar el primero, para actualizar su modificador setcurrentTVShow
      } 
    };
  }, [currentTVShow]);*/ 


  async function fetchByTitle(title) { // Esta configuracion es para la parte de serchbar o navegador de la web
    const searchResponse = await TVShowAPI.fetchByTitle(title); // Nos estamos trayendo (fetchByTitle) del archivo de tv-show.js que es donde estamos consolidado las peticiones
    if (searchResponse.length > 0) {
      setCurrentTVShow(searchResponse[0])
    }
  }

  async function fetchRecomendations(tvShowId) { // Esta configuracion de la lista de de peliculas recomendadas
    const recomendationListResp = await TVShowAPI.fetchRecomendations(tvShowId); // Nos estamos trayendo (fetchRecomendations) del archivo de tv-show.js que es donde estamos consolidado las peticiones
    if (recomendationListResp.length > 0) {  // Aqui es misma logica que la anterios
      setRecomentationList(recomendationListResp.slice(0,10)); // Aqui debemos actualizar nuestro usestate ya que se debe crear uno nuevo para ese elemento ya que se estara actualizando cada vez que interactuemos 
    }
  };

  function updateCurrentTVShow(tvShow) {   // Aqui vamos actualizar la hacer click en un tvshow
    setCurrentTVShow(tvShow);
  }; // Aqui vamos actualizar la hacer click en un tvshow

  
  console.log(currentTVShow); // Para ver donde esta ubicada esa imagen dentro del contexto del objeto.

  useEffect(() => { // Es necesario llamar a useffect ya que esa serie popular va a cambiar nunca sera la misma ya que si otra tiene mas puntaje sera esa y asi...
    fetchPopulars();
  }, []); // No se agrega nada en el array por que no se estan manejando dependencias, solo una hacia la lista fetchPopulars y eso lo da la api, si fuera un adi creado

  useEffect(() => { // Con este useEffect vamos a manejar el ciclo de la lista de series recomendadas ya que se va a estar actualizando contantemente
    if (currentTVShow) {
      fetchRecomendations(currentTVShow.id);
    }
  }, [currentTVShow]); // Aqui pasamos el currentTVShow porque es el que mnos va a mostar ya actualizado

  return (
    <div className={s.main_container} 
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
            <SearchBar onSubmit={fetchByTitle} /> 
          </div>
        </div>
      </div>
      <div className={s.tv_show_details}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_shows}>
        {currentTVShow && (
          <TVShowList 
            onClickItem={updateCurrentTVShow} // Aqui estamos trayendo como props la funcion updateCurrentTVShow y la vamos a ejecutar haciendo click 
            TVShowList={recomendationList} // Y aqui nos vamos a traer la lista como props igual
          />
        )}
      </div>
    </div>
  );
}  


export default App

