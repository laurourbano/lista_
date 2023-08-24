import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Contato } from 'src/app/model/contato';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: [ './table.component.scss' ],
})
export class TableComponent {

  displayedColumns: string[] = [ 'id', 'nome', 'email', 'telefone', 'celular', 'departamento', 'actions' ];
  dataSource!: MatTableDataSource<Contato>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  lista: Contato[] = [];

  constructor(private http: HttpClient, private service: ListaService, private activeRoute: ActivatedRoute) {
    this.http.get('http://localhost:3000/api/ramais').subscribe((data: any) => {
      this.lista = data.result;
      this.dataSource = new MatTableDataSource(this.lista);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    this.refresh();

  }

  onDelete(contato: Contato) {
    if (confirm('Deseja realmente excluir este contato?')) {
      this.service.deleteLista(contato.id).subscribe((data: any) => {
        this.lista = data.result;
      });
      this.refresh();
    }
  };

  refresh() {
    this.service.getLista().subscribe((data: any) => {
      this.lista = data.result;
      this.dataSource = new MatTableDataSource(this.lista);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}