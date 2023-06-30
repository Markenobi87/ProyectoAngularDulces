import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ServiceService} from'src/app/services/service.service';


@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {
 dulcesForm!:FormGroup;
 
 constructor(private formBuilder:FormBuilder,
  private servicio:ServiceService,private router:Router){}
  
  public newDulces = this.servicio.dulcesData
  public dulcesId = this.servicio.dulcesData.
  id
  ngOnInit():void{
    this.dulcesForm = this.formBuilder.group({
      
      img: [ this.newDulces.img,[Validators.required]
    ],
      
      name:[
         this.newDulces.name,[Validators.required]
      ],
     
    precio: [ this.newDulces.precio,[Validators.required]
    ],
    });

    this.dulcesForm.valueChanges.subscribe((changes)=>{
      
      this.newDulces=changes;
    }
    )
  }
 
  onSubmit(){ 
    if (this.dulcesId !==""){
      this.servicio.putDulces(this.dulcesId,this.newDulces).subscribe()
      alert("dulces editados")
      this.router.navigate(["listado"])

    }else{
     
      this.servicio.postDulces(this.newDulces).subscribe();
      alert("dulce añadido")
      this.router.navigate(["lista"])
    }
 
    

this.dulcesForm.reset()
  
}

}
