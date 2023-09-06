import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contato } from '../model/contato';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(private http: HttpClient) { }

  buscarTodos() {
    return this.http.get('http://localhost:3000/api/ramais');
  }

  buscarUm(id: number) {
    return this.http.get(`http://localhost:3000/api/ramal/${ id }`);
  }

  adicionar(contato: Contato) {
    return this.http.post('http://localhost:3000/api/ramal', contato);
  }

  atualizar(contato: Contato) {
    return this.http.put(`http://localhost:3000/api/ramal/${ contato.id }`, contato);
  }

  deletar(id: number) {
    return this.http.delete(`http://localhost:3000/api/ramal/${ id }`);
  }

  //metodo para atualizar a página para cada inserção deleção atualização
  refresh(): void {
    window.location.reload();
  }

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

  buscarRamaisDepartamento(departamento: string) {
    return this.http.get(`http://localhost:3000/api/ramais/${ departamento }`);
  }

}
