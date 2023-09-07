import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Departamento } from 'src/app/model/departamento';
import { ListaService } from 'src/app/services/lista.service';
@Component({
  selector: 'app-contato-form',
  templateUrl: './contato-form.component.html',
  styleUrls: [ './contato-form.component.scss' ]
})
export class ContatoFormComponent {

  departamentos: Departamento[] = [];

  selectedValue!: string;

  constructor(private service: ListaService, private activeRoute: ActivatedRoute) {

  };

  ngOnInit() {
    this.service.buscarDepartamentos().subscribe(
      (departamentos) => {
        this.departamentos = departamentos as Departamento[];
      }
    );
  }

}
