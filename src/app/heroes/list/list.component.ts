import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  heroNames: string[] = ['spiderman', 'superman', 'batman', 'capitan america', 'shazam'];
  ultimoElementoBorrado: string | undefined;

  borrarUltimoHeroe(): void {

    this.ultimoElementoBorrado = this.heroNames.pop();
  }
}
