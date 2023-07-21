import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';
import { DbzService } from './dbz/services/dbz.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CounterModule,
    HeroesModule,
    DbzModule,
    BrowserModule
  ],
  providers: [DbzService],
  bootstrap: [AppComponent]
})
export class AppModule { }
