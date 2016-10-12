import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

// Import of custom components
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, ProfileComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }