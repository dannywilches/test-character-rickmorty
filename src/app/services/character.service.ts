import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  api: string = 'https://rickandmortyapi.com/api/location?page=1';
  constructor(private http:HttpClient) { }

  listInfo():Observable<any> {
    return this.http.get(this.api);
    // result = this.http.get(this.api);
  }

  getCharacter(urlCharacter:string):Observable<any> {
    return this.http.get(urlCharacter);
  }

}
