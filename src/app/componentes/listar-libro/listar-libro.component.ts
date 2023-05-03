import { Component, OnInit} from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-listar-libro',
  templateUrl: './listar-libro.component.html',
  styleUrls: ['./listar-libro.component.css']
})
export class ListarLibroComponent implements OnInit{
  Libros:any;
  constructor(private crudService:CrudService){
    
  }
  ngOnInit():void{
    this.crudService.ObtenerLibros().subscribe(respuesta =>{
      console.log(respuesta);
      this.Libros = respuesta;
    })
  }

  borrarRegistro(iControl:any, isbn:any){
    if(window.confirm("Confirmar eliminación libro con ISBN "+isbn)){
      this.crudService.BorrarLibro(isbn).subscribe(respuesta=>{
        this.Libros.splice(iControl, 1);
      });
    }
  }

}
