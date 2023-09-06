import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  departamentos: FormGroup = this.form.group({
    nome: [ '' ], // nome do departamento
  }
  );
  // departamentos: Departamento[] = [
  //   { value: 'Administrativo' },
  //   { value: 'Cadastro' },
  //   { value: 'Cozinha' },
  //   { value: 'Compras' },
  //   { value: 'Comunicação' },
  //   { value: 'Copa' },
  //   { value: 'Diretoria' },
  //   { value: 'Financeiro' },
  //   { value: 'Fiscalização' },
  //   { value: 'Jurídico' },
  //   { value: 'Limpeza' },
  //   { value: 'Ouvidoria' },
  //   { value: 'Portaria' },
  //   { value: 'Recursos Humanos' },
  //   { value: 'Recepção' },
  //   { value: 'Tecnologia da Informação' },
  //   { value: 'Técnico Científico' }
  // ];

  constructor(private service: ListaService, private route: Router, private dialog: MatDialog, private form: FormBuilder) {

  }
  onDepartamentoSubmit(departamento: string) {
    this.service.addDepartamento(departamento).subscribe(
      (departamento) => {
        console.log(departamento);
        this.dialog.closeAll();
        this.route.navigate([ '' ]);

      }
    );
  }
}

interface Departamento {
  value: string;
}
