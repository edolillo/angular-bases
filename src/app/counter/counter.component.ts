import { Component } from '@angular/core';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class AppCounter {
  counter: number = 0;

  incrementar():void {
    this.counter++;
  }

  decrementar():void{
    this.counter--;
  }

  reset():void{
    this.counter=0;
  }
}
