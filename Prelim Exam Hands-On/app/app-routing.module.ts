import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { AboutComponent } from './about/about.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'partners', component: PartnersComponent},
  {path: 'join-us', component: JoinUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
