import { NgModule } from '@angular/core';
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

    //Si utilizamos "loadChildren" estamos haciendo uso de carga "LazyLoad"
    path : 'posts',
    //Forma Antigua (Funciona pero mas propensa a errores)
    //loadChildren: './pages/posts/posts.module#PostsModule'

    //Forma Nueva(Funciona, la mas recomendada)
    loadChildren: () =>import ('./pages/posts/posts.module').then( m => m.PostsModule)
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
