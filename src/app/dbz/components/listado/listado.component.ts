import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'dbz-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
   constructor(private dbzService: DbzService){}

   get characters(): ICharacter[] {
    return this.dbzService._characterList;
   }
   removeCharacter(itemCharacter: string): void {
      this.dbzService.removeCharacterByUUID(itemCharacter);
   }
}
