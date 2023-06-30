import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { DetalleComponent } from './pages/listado/detalle/detalle.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FooterComponent } from './core/footer/footer.component';
import { GestionComponent } from './pages/gestion/gestion.component';



@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, ListadoComponent, DetalleComponent, FooterComponent, GestionComponent,],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule , FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
