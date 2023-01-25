import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    // Este pipe esta diseñado para el filtrado de la información, en el for valida las coincidencias con cada uno de los campos de la tabla
    if (arg === '') return value;
    const resultCharacter = [];
    for(const character of value) {
      if (character.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultCharacter.push(character);
      }
      if (character.location.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultCharacter.push(character);
      }
      if (character.gender.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultCharacter.push(character);
      }
      if (character.species.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultCharacter.push(character);
      }
      if (character.status.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultCharacter.push(character);
      }
      if (character.created.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultCharacter.push(character);
      }
    }
    return resultCharacter;
  }

}
