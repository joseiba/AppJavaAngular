import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import {DataService} from './data.service';
import { HttpClientModule } from '@angular/common/http';
 @NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    UserComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
