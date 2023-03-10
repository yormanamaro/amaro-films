const BASE_URL = "https://api.themoviedb.org/3/"; //Lo que estamos haciendo es setear en una const (BASE_url) esa url para no tener que escribirla siempre durante el dodigo.
// era url es una parte que siempre va hacer igual cada vez que se realicen peticiones a la api.

const API_KEY_PARAM = "?api_key=4cd0e20e88279e72f417c2cd4a8b508b"; // Cada empoint tiene ese parametro obligatorio al igual que el anterior nunca cambia, 
// asi que para ahorrar escritura se resumen a el nombre de la const (API_KEY_PARAM)

const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original"; // Aqui estamops yomando la base de la url de  la api para las imagenes

const SMALL_IMG_COVER_BASE_URL = "https://image.tmdb.org/t/p/w300"; // Para traernos las imagenes con tamano de 300px

export {BASE_URL, API_KEY_PARAM, BACKDROP_BASE_URL, SMALL_IMG_COVER_BASE_URL}; // Se agrega como export para que pueda ser usada en el resto del proyecto.

