import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentoFormComponent } from './components/departamento-form/departamento-form.component';
import { FuncionarioFormComponent } from './components/funcionario-form/funcionario-form.component';
import { FuncionarioListComponent } from './components/funcionario-list/funcionario-list.component';

const routes: Routes = [
  { path: '', component: FuncionarioListComponent },
  { path: 'contato', component: FuncionarioFormComponent },
  { path: 'formulario/:id', component: FuncionarioFormComponent },
  { path: 'departamento', component: DepartamentoFormComponent },
  { path: 'departamento/:id', component: DepartamentoFormComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
