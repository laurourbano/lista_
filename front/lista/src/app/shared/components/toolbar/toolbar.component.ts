import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DepartamentoFormComponent } from 'src/app/components/departamento-form/departamento-form.component';
import { FuncionarioFormComponent } from 'src/app/components/funcionario-form/funcionario-form.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: [ './toolbar.component.scss' ]
})
export class ToolbarComponent {

  constructor(private dialog: MatDialog) { }
  criarContato() {
    this.dialog.open(FuncionarioFormComponent)
  }
  criarDepartamento() {
    this.dialog.open(DepartamentoFormComponent)
  }
}
