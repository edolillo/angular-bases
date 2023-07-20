import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Ironman';
  public edad: number = 45;

  get capitalizedName(): string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.edad}`;
  }

  changeHero():void {
    this.name = 'spiderman';
  }

  changeEdad():void {
    this.edad=20;
  }

  resetData():void {
    this.name = 'ironman';
    this.edad = 45;
  }
}
