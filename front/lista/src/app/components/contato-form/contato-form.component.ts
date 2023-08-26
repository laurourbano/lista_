import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaService } from 'src/app/services/lista.service';
@Component({
  selector: 'app-contato-form',
  templateUrl: './contato-form.component.html',
  styleUrls: [ './contato-form.component.scss' ]
})
export class ContatoFormComponent {

  selectedValue!: string;

  departamentos: Departamento[] = [
    { value: 'Administrativo' },
    { value: 'Cadastro' },
    { value: 'Cozinha' },
    { value: 'Compras' },
    { value: 'Comunicação' },
    { value: 'Copa' },
    { value: 'Diretoria' },
    { value: 'Financeiro' },
    { value: 'Fiscalização' },
    { value: 'Jurídico' },
    { value: 'Limpeza' },
    { value: 'Ouvidoria' },
    { value: 'Portaria' },
    { value: 'Recursos Humanos' },
    { value: 'Recepção' },
    { value: 'Tecnologia da Informação' },
    { value: 'Técnico Científico' }
  ];

  constructor(private service: ListaService, private activeRoute: ActivatedRoute) {

  }
}
interface Departamento {
  value: string;
}
