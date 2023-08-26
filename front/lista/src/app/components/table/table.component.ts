import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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

  constructor(private http: HttpClient, private service: ListaService) {
    this.service.buscarTodos().subscribe((data: any) => {
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
  }

  onDelete(contato: Contato) {
    /*TODO mat-dialog para confirmar exclusão*/

    if (confirm(`Deseja realmente excluir o contato ${ contato.nome }?`)) {
      this.service.deletar(contato.id).subscribe(() => {
        this.service.refresh();
      });
    }
  };

}
