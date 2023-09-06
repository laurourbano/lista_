import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: [ './delete-dialog.component.scss' ]
})
export class DeleteDialogComponent {

  constructor(private service: ListaService, private dialog: MatDialog) { }

  deletarContato(contato: any) {
    console.log(contato);
    this.service.deletar(contato.id).subscribe((contato) => {
      console.log(contato);
    });
  }
}
