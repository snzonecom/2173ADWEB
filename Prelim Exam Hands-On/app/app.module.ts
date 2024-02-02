import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { AboutComponent } from './about/about.component';
import { PartnersComponent } from './partners/partners.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    JoinUsComponent,
    AboutComponent,
    PartnersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
