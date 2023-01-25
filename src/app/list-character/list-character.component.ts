import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { CharacterAttr } from './character';

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styleUrls: ['./list-character.component.css']
})
export class ListCharacterComponent implements OnInit {
  // Variables donde se almacenan la informacion de los personajes y atributos
  DataInfo: any = [];
  Characters: Array<CharacterAttr> = [];
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

  listCharacterComponent():void {
    this.character.listInfo().subscribe(response =>{
      console.log(response);
      this.DataInfo = response;
      Object.values(this.DataInfo.results).forEach((Places:any) => {
        // console.log(Places);
        Object.values(Places.residents).forEach((character:any) => {
          // console.log(character);
          this.character.getCharacter(character).subscribe(infoCharacter =>{
            // console.log(infoCharacter);
            this.Characters.push(infoCharacter);
            // console.log(this.Characters);
          });
        });
      });
    });
  }

  onTableDataChange(event: any){
    this.page = event;
  }

  cleanFilter(){
    this.filterCharacter = '';
  }

}
