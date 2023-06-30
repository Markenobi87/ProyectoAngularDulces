import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent {
  
  id!:number;
  detalle:any;
  
  constructor(
    private servicio:ServiceService,
    private activatedRoute:ActivatedRoute, 
    private router:Router){}

      ngOnInit():void{
        this.activatedRoute.paramMap.subscribe
        ((params) => {
          this.id = Number(params.get("id"))
        });
            
        this.servicio.getDulceById(this.id).
            subscribe((data:any)=>{
              this.detalle= data;
            })
      }
deleteDetalle(){
this.servicio.deleteDetalle(this.id).subscribe((data:any)=>{
  alert("Producto eliminado")
  this.router.navigate(["listado"])
})}
modifyItem(detalle:any){
  this.servicio.modifyItem(detalle);
  this.router.navigate(["gestion"])

}
}


