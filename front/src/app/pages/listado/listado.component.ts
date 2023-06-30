import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {
dulcesList :any[] = []      
constructor(private servicio:ServiceService)
{}
ngOnInit():void {
  this.servicio.getDulces().subscribe
  ((data:any) =>{
  this.dulcesList = [...data];
    
  });

}
}
