import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Contato } from './model/contato';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  title = 'lista';
  lista: Contato[] = [];

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/api/ramais').subscribe((data: any) => {
      console.log(data.result); //
      this.lista = data.result;
    });
  }

}
