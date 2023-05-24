import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from './Libro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API:string="http://localhost:3000/libros/";
  //API:string="http://angular-test.eastus.cloudapp.azure.com/libros/";
  //API: string="angular-test.eastus.cloudapp.azure.com/libros/";
  constructor(private clientehttp:HttpClient) { 
    
  }
  AgregarLibro(datoslibro:Libro):Observable<any>{
    //se inserta datos de libro
    //return this.clientehttp.post(this.API+"?insertar=1",datoslibro);
    return this.clientehttp.post(this.API,datoslibro);
  }
  ObtenerLibros(){
    return this.clientehttp.get(this.API); //porque ya te lo da esrializado
  }
  BorrarLibro(isbn:any){
    //return this.clientehttp.get(this.API+"?borrar="+isbn);
    return this.clientehttp.delete(this.API+isbn);
  }
  ObtenerLibro(isbn:any):Observable<any>{
    //return this.clientehttp.get(this.API+isbn);
    return this.clientehttp.get(this.API+isbn);
  }
  EditarLibro(isbn:any, datosLibro:Libro):Observable<any>{
    //return this.clientehttp.post(this.API+isbn, datosLibro);
    return this.clientehttp.put(this.API+isbn, datosLibro);
  }
}
