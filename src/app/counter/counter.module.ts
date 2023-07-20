import { NgModule } from "@angular/core";
import { AppCounter } from "./counter.component";

@NgModule({
  declarations:[
    AppCounter
  ],
  exports:[
    AppCounter
  ]
})
export class CounterModule {}
