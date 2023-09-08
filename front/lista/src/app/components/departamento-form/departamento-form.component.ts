import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-departamento-form',
  templateUrl: './departamento-form.component.html',
  styleUrls: [ './departamento-form.component.scss' ]
})
export class DepartamentoFormComponent {
  selectedValue!: string;

  constructor(private service: ListaService, private route: Router, private dialog: MatDialog, private form: FormBuilder) {
  }
}
