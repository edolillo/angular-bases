import { Component, EventEmitter, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';
import { v4 as uuid} from 'uuid'

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  constructor(private dbzService: DbzService){}
 public character: ICharacter = {
  name:'',
  power:0,
  uuid:''
 }

 emitCharacter(): void{
  if (this.character.name.length < 3) return;
  this.dbzService.addCharacterList({...this.character});
 }
}
