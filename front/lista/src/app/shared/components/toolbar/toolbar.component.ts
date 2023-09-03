import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContatoFormComponent } from 'src/app/components/contato-form/contato-form.component';
import { DepartamentoFormComponent } from 'src/app/components/departamento-form/departamento-form.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: [ './toolbar.component.scss' ]
})
export class ToolbarComponent {

  constructor(private dialog: MatDialog) { }
  criarContato() {
    this.dialog.open(ContatoFormComponent)
  }
  criarDepartamento() {
    this.dialog.open(DepartamentoFormComponent)
  }
}
