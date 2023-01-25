// aqui se van a orquestar nuestras peticiones a los empoint, a las rutas que tenga el api.
// Se instalaran una libreria de peticiones (axios)

import axios, { Axios } from "axios"; // luego de ya instalado se importa
import { BASE_URL, API_KEY_PARAM } from "../config";
import { FAKE_POPULARS } from "./fake_data" // Este caso es para cuando nos queremos traer de kake data un show en particular falseado

export class TVShowAPI {
    // Axios
    static async fetchPopulars() { // Aqui se va hacer toda la orquestacion de la peticion de todos los tvshow populares
        try {                   // Se inyecta un try/catch para capturar posibles errores en la llamada
            const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);  // para esperar la resolucion de la peticion (proceso asincrono)
            console.log(response.data.results) // Solo para ver que se este mostrando
            return response.data.results  // En el paso anterior solo estabamos haciendo el llamado pero no entramos al array como tal, eso lo hacemos en este paso (data es un objeto de axios para poder ingresar al contenido)
        } catch (err) {
            console.log(err); // Aqui pintam,os el error para ver que esta pasando en tal caso
        }
        /*return FAKE_POPULARS;*/ // Se debe colocar entre /* el try Catch */ para dasactivalor y que pueda tomar ese fake popular 
    }
}



