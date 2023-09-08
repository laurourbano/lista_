import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaService } from 'src/app/services/lista.service';
@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: [ './funcionario-form.component.scss' ]
})
export class FuncionarioFormComponent {

  departamentos: any;

  selectedValue!: string;

  constructor(private service: ListaService, private activeRoute: ActivatedRoute) {

  };

  ngOnInit() {  }
}
