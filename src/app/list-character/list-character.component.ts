import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { CharacterModel } from './character';

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styleUrls: ['./list-character.component.css']
})
export class ListCharacterComponent implements OnInit {
  // Variables donde se almacenan la informacion de los personajes y atributos
  DataInfo: any = [];
  Characters: Array<CharacterModel> = [];
  // Variables para la paginacion de la tabla
  title = 'paginataion';
  page: number = 1;
  count: number = 0;
  tableSize: number = 12;
  // Variable del filtro de busqueda
  filterCharacter = '';

  constructor(private character: CharacterService) { }

  ngOnInit(): void {
    this.listCharacterComponent();
  }
  // Función que recorre la información de retornada de la api y extrae los personajes y los va consultando y almacenando en el array Characters 
  listCharacterComponent():void {
    this.character.listInfo().subscribe(response =>{
      this.DataInfo = response;
      Object.values(this.DataInfo.results).forEach((Places:any) => {
        Object.values(Places.residents).forEach((character:any) => {
          this.character.getCharacter(character).subscribe(infoCharacter =>{
            this.Characters.push(infoCharacter);
          });
        });
      });
    });
  }
  // Función para la paginación
  onTableDataChange(event: any){
    this.page = event;
  }
  // Función para limpiar el filtro
  cleanFilter(){
    this.filterCharacter = '';
  }

}
