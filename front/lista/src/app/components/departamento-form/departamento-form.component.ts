import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Departamento } from 'src/app/model/departamento';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-departamento-form',
  templateUrl: './departamento-form.component.html',
  styleUrls: [ './departamento-form.component.scss' ]
})
export class DepartamentoFormComponent {
  selectedValue!: string;

  departamento: Departamento = {
    iddepartamento: 0,
    nomedepartamento: '',
  };

  departamentos: FormGroup = this.form.group({
    nomedepartamento: [ '' ], // nome do departamento
  }
  );

  constructor(private service: ListaService, private route: Router, private dialog: MatDialog, private form: FormBuilder) {

  }
  onDepartamentoSubmit(departamento: Departamento) {
    this.service.addDepartamento(departamento).subscribe(
      (departamento) => {
        console.log(departamento);
        this.dialog.closeAll();
        this.route.navigate([ '' ]);
      }
    );
  }
}
