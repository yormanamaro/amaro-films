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
        //return FAKE_POPULARS; // Se debe colocar entre /* el try Catch  para dasactivalor y que pueda tomar ese fake popular 
    }


    //////// EJEMPLO PERO USANDO FETCH Y NO AXIOS //////////////////////
    /*static async fetchPopulars() {
      try {
        const response = await fetch(`${BASE_URL}tv/popular${API_KEY_PARAM}`, {
          method: "GET",
        });

        const results = await response.json();
        console.log(results.results);
        return results.results;

      } catch (err) {
          console.log(err); // Aqui pintam,os el error para ver que esta pasando en tal caso
      }
      //return FAKE_POPULARS;/ // Se debe colocar entre / el try Catch / para dasactivalor y que pueda tomar ese fake popular 
  }*/

  static async fetchByTitle(title) { // con esta peticion a la api mediante un metodo estatico es para el buscador de series
    try { // mismo proceso que la peticion anterior solo que con sus elementos particulares de la consulta
      const response = await axios.get(`${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`);
      return response.data.results
    } catch (err) {
      console.log(err)
    }
  }

}


// NOTA: EL (data) en axios ES UN OBJETO DE LA RESPUESTA DE AXIOS ESO NOS VA A TRAER TODA LA INFORMACION DEL OBJETO COMO TAL.
// EL STATIC ANTES DE LA FUNCION LO QUE NOS VA A PERMITIR PODER LLAMAR DESDE OTRO ARCHIVO DONDE QIERA UTILIZAR ESA CLASE, LO LLAMAMOS SIN TENER QUE CREAR UNA INSTANCIA DE ESA CLASE SINO QUE SE LLAMARIA COMO UNA INSTANCIA 
   // SIN TENER QUE HACER UN NEW BLA BLA BLA



