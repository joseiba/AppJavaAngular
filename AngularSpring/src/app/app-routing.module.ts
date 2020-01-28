import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { DeleteComponent } from './Persona/delete/delete.component';


const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'add', component:AddComponent},
  {path:'edit', component:EditComponent},
  {path:'delete', component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
