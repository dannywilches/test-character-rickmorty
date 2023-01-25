import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  api: string = 'https://rickandmortyapi.com/api/location?page=1';
  constructor(private http:HttpClient) { }

  // Función que trae la información de la api
  listInfo():Observable<any> {
    return this.http.get(this.api);
  }

  // Función que trae la información de los personajes, se envía por parametro la URL indicada para cada personaje
  getCharacter(urlCharacter:string):Observable<any> {
    return this.http.get(urlCharacter);
  }

}
