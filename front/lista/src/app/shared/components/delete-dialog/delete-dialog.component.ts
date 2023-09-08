import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Funcionario } from 'src/app/model/funcionarios';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: [ './delete-dialog.component.scss' ]
})
export class DeleteDialogComponent {

  funcionario: Funcionario = {
    idfuncionario: 0,
    nomefuncionario: '',
    email: '',
    ramal: '',
    iddepartamento: 0
  };

  constructor(private service: ListaService, private dialog: MatDialog) { }

}
