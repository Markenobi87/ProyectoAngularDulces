import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { DetalleComponent } from './pages/listado/detalle/detalle.component';
import { GestionComponent } from './pages/gestion/gestion.component';


const routes: Routes = [
  {path:"",component:HomeComponent },
  {path:"dulces", component:ListadoComponent },
  {path: "gestion", component:GestionComponent},
  {path:"dulces/:id",component:DetalleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
