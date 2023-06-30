import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
db_url:string = " http://localhost:3000/Dulces";

public  dulcesData ={
  name:"",
  img:"",
  precio:"",
  id:""
}
  
//el primer http lo he elgido yo podrias poner el nombre quieras.
  
  constructor(private http:HttpClient) {}
  getDulces(){
    return this.http.get(this.db_url);
  }
  getDulceById(id:number){
    return this.http.get(`${this.db_url}/${id}`)

  }
 
  deleteDetalle(id:number){
    return this.http.delete(`${this.db_url}/${id}`)
  }

  postDulces(dulces:any){
    return this.http.post(this.db_url,dulces)
  }
  modifyItem(detalle:any){
    this.dulcesData=detalle
  }
  putDulces(dulcesId:any,editedDulces:any){
    return this.http.put(`${this.db_url}/$
    {dulcesId}`,editedDulces);
  }
}



