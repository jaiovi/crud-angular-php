import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit{
  formularioDeLibros:FormGroup;
  theISBN:any;

  constructor(
    private activeRoute:ActivatedRoute,
    public formulario:FormBuilder,
    private crudService:CrudService, //instancia, recuerda nombrarlo bien
    private ruteador:Router
    ){
      this.theISBN = this.activeRoute.snapshot.paramMap.get('isbn');
      console.log(this.theISBN);

      //obtener API
      this.crudService.ObtenerLibro(this.theISBN).subscribe(respuesta =>{
        this.formularioDeLibros.setValue({
          titulo:respuesta[0]['titulo'],
          autor:respuesta[0]['autor'],
          anio:respuesta[0]['anio'],
          editorial:respuesta[0]['editorial']
        });
      });
      this.formularioDeLibros=this.formulario.group({
        titulo:[''],
        autor:[''],
        anio:[''],
        editorial:['']
      });
    }

    ngOnInit() :void {

    }

    enviarDatos(){
      this.crudService.EditarLibro(this.theISBN, this.formularioDeLibros.value).subscribe( () =>{
        this.ruteador.navigateByUrl('/listar-libro');
      });
    }
}
