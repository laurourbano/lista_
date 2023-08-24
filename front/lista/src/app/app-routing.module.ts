import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoFormComponent } from './components/contato-form/contato-form.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'formulario', component: ContatoFormComponent },
  { path: 'formulario/:id', component: ContatoFormComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
