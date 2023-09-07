import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departamento } from '../model/departamento';
import { Funcionario } from '../model/funcionarios';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(private http: HttpClient) { }

  // funcionarios
  buscarTodos() {
    return this.http.get('http://localhost:3000/api/funcionarios');
  }

  buscarUm(idfuncionario: number) {
    return this.http.get(`http://localhost:3000/api/funcionario/${ idfuncionario }`);
  }

  adicionar(funcionario: Funcionario) {
    return this.http.post('http://localhost:3000/api/funcionario', funcionario);
  }

  atualizar(funcionario: Funcionario) {
    return this.http.put(`http://localhost:3000/api/funcionario/${ funcionario.idfuncionario }`, funcionario);
  }

  deletar(idfuncionario: number) {
    return this.http.delete(`http://localhost:3000/api/funcionario/${ idfuncionario }`);
  }

  // departamentos
  addDepartamento(departamento: Departamento) {
    return this.http.post('http://localhost:3000/api/departamento', departamento);
  }

  buscarDepartamentos() {
    return this.http.get('http://localhost:3000/api/departamentos');
  }

  buscarDepartamento(iddepartamento: number) {
    return this.http.get(`http://localhost:3000/api/departamento/${ iddepartamento }`);
  }

  deletarDepartamento(iddepartamento: number) {
    return this.http.delete(`http://localhost:3000/api/departamento/${ iddepartamento }`);
  }

  atualizarDepartamento(iddepartamento: number, departamento: Departamento) {
    return this.http.put(`http://localhost:3000/api/departamento/${ iddepartamento }`, departamento);
  }

  // busca ramais por departamento
  buscarRamaisDepartamento(iddepartamento: number) {
    return this.http.get(`http://localhost:3000/api/funcionarios/${ iddepartamento }`);
  }

}
