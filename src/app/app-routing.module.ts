import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//Necesario importar los componentes a este archivo para que sean visibles por "routes"
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';



const routes : Routes = [
  {
    path : 'home',
    component: HomeComponent
  },

  {
    path : 'about',
    component: AboutComponent
  },

  {
    path : 'contact',
    component: ContactComponent
  },

  {
    path : '**',
    redirectTo: 'home'
  }




];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],

  // Exportamos la configuracion que tiene el Router Module
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
