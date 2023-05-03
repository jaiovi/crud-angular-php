import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from './Libro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //API:string="http://localhost/libros/";
  API:string="http://angular-test.eastus.cloudapp.azure.com/libros/";
  //API: string="angular-test.eastus.cloudapp.azure.com/libros/";
  constructor(private clientehttp:HttpClient) { 
    
  }
  AgregarLibro(datoslibro:Libro):Observable<any>{
    //se inserta datos de libro
    return this.clientehttp.post(this.API+"?insertar=1",datoslibro);
  }
  ObtenerLibros(){
    return this.clientehttp.get(this.API); //porque ya te lo da esrializado
  }
  BorrarLibro(isbn:any){
    return this.clientehttp.get(this.API+"?borrar="+isbn);
  }
  ObtenerLibro(isbn:any):Observable<any>{
    return this.clientehttp.get(this.API+"?consultar="+isbn);
  }
  EditarLibro(isbn:any, datosLibro:Libro):Observable<any>{
    return this.clientehttp.post(this.API+"?actualizar="+isbn, datosLibro);
  }
}
