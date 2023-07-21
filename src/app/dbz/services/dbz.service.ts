import { Injectable } from "@angular/core";
import { ICharacter } from "../interfaces/character.interface";
import { Observable, of } from "rxjs";
import { v4 as uuid } from 'uuid';


@Injectable({
  providedIn:'root'
})
export class DbzService {
  private characterList: ICharacter[] = [
    {
      name:'Krillin',
      power:500,
      uuid: uuid()
    },
    {
      name: 'Goku',
      power: 9000,
      uuid: uuid()
    },
    {
      name:'Freezer',
      power: 1500,
      uuid: uuid()
    }
  ];

  get _characterList() {
    return this.characterList;
  }

  addCharacterList(character: ICharacter): void {
    character.uuid = uuid();
    this.characterList.push(character);
  }

  removeCharacterByUUID(itemCharacter: string): void{
   this.characterList = this.characterList.filter(character => character.uuid !== itemCharacter)
  }
}


