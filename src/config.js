const BASE_URL = "https://api.themoviedb.org/3/"; //Lo que estamos haciendo es setear en una const (BASE_url) esa url para no tener que escribirla siempre durante el dodigo.
// era url es una parte que siempre va hacer igual cada vez que se realicen peticiones a la api.

const API_KEY_PARAM = "?api_key=4cd0e20e88279e72f417c2cd4a8b508b"; // Cada empoint tiene ese parametro obligatorio al igual que el anterior nunca cambia, 
// asi que para ahorrar escritura se resumen a el nombre de la const (API_KEY_PARAM)

export {BASE_URL, API_KEY_PARAM}; // Se agrega como export para que pueda ser usada en el resto del proyecto.

