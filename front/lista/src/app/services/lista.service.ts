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
  buscarFuncionarios() {
    return this.http.get('http://localhost:3000/api/funcionarios');
  }

  buscarFuncionario(idfuncionario: number) {
    return this.http.get(`http://localhost:3000/api/funcionario/${ idfuncionario }`);
  }

  adicionarFuncionario(funcionario: Funcionario) {
    return this.http.post('http://localhost:3000/api/funcionario', funcionario);
  }

  atualizarFuncionario(funcionario: Funcionario) {
    return this.http.put(`http://localhost:3000/api/funcionario/${ funcionario.idfuncionario }`, funcionario);
  }

  deletarFuncionario(idfuncionario: number) {
    return this.http.delete(`http://localhost:3000/api/funcionario/${ idfuncionario }`);
  }


  // busca ramais por departamento
  buscarRamaisDepartamento(iddepartamento: number) {
    return this.http.get(`http://localhost:3000/api/funcionarios/${ iddepartamento }`);
  }

}
