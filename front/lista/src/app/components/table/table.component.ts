import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Contato } from 'src/app/model/contato';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: [ './table.component.scss' ],
})
export class TableComponent {

  displayedColumns: string[] = [ 'id', 'nome', 'email', 'telefone', 'celular', 'departamento' ];
  dataSource!: MatTableDataSource<Contato>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  lista: Contato[] = [];

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/api/ramais').subscribe((data: any) => {
      console.log(data.result); //
      this.lista = data.result;
      this.dataSource = new MatTableDataSource(this.lista);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}