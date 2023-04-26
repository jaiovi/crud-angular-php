import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarLibroComponent } from './componentes/listar-libro/listar-libro.component';
import { AgregarLibroComponent } from './componentes/agregar-libro/agregar-libro.component';
import { EditarLibroComponent } from './componentes/editar-libro/editar-libro.component';
const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo: 'agregar-libro'},
  {path:'agregar-libro',component:AgregarLibroComponent},
  {path:'editar-libro',component:EditarLibroComponent},
  {path:'listar-libro',component:ListarLibroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
