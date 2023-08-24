import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contato } from '../model/contato';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(private http: HttpClient) { }

  getLista() {
    return this.http.get('http://localhost:3000/api/ramais');
  }

  getListaById(id: number) {
    return this.http.get(`http://localhost:3000/api/ramal/${ id }`);
  }

  postLista(contato: Contato) {
    return this.http.post('http://localhost:3000/api/ramal', contato);
  }

  putLista(contato: Contato) {
    return this.http.put(`http://localhost:3000/api/ramal/${ contato.id }`, contato);
  }

  deleteLista(id: number) {
    return this.http.delete(`http://localhost:3000/api/ramal/${ id }`);
  }

}
