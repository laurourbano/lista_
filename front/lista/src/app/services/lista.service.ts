import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contato } from '../model/contato';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(private http: HttpClient) { }

  // funcionarios
  buscarTodos() {
    return this.http.get('http://localhost:3000/api/funcionarios');
  }

  buscarUm(id: number) {
    return this.http.get(`http://localhost:3000/api/funcionario/${ id }`);
  }

  adicionar(contato: Contato) {
    return this.http.post('http://localhost:3000/api/funcionario', contato);
  }

  atualizar(contato: Contato) {
    return this.http.put(`http://localhost:3000/api/funcionario/${ contato.id }`, contato);
  }

  deletar(id: number) {
    return this.http.delete(`http://localhost:3000/api/funcionario/${ id }`);
  }

  // departamentos
  addDepartamento(departamento: string) {
    return this.http.post('http://localhost:3000/api/departamento', departamento);
  }

  buscarDepartamentos() {
    return this.http.get('http://localhost:3000/api/departamentos');
  }

  buscarDepartamento(id: number) {
    return this.http.get(`http://localhost:3000/api/departamento/${ id }`);
  }

  deletarDepartamento(id: number) {
    return this.http.delete(`http://localhost:3000/api/departamento/${ id }`);
  }

  atualizarDepartamento(departamento: string) {
    return this.http.put(`http://localhost:3000/api/departamento/${ departamento }`, departamento);
  }

  // busca ramais por departamento
  buscarRamaisDepartamento(departamento: string) {
    return this.http.get(`http://localhost:3000/api/funcionarios/${ departamento }`);
  }

}
