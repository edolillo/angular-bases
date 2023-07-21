import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MainPageComponent } from "./pages/main-page.component";
import { ListadoComponent } from './components/listado/listado.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations:[
    MainPageComponent,
    ListadoComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class DbzModule {}
