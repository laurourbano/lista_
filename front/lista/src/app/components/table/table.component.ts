import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Funcionario } from 'src/app/model/funcionarios';
import { ListaService } from 'src/app/services/lista.service';
import { DeleteDialogComponent } from 'src/app/shared/components/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: [ './table.component.scss' ],
})
export class TableComponent {

  displayedColumns: string[] = [ 'nome', 'email', 'ramal', 'departamento', 'actions' ];
  dataSource!: MatTableDataSource<Funcionario>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  lista: Funcionario[] = [];

  constructor(private service: ListaService, private dialog: MatDialog) {
    this.renderizaLista();
  }

  renderizaLista() {
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

  onDelete(funcionario: Funcionario) {
    this.dialog.open(DeleteDialogComponent);
  };

  editarFuncionario(funcionario: Funcionario) {
    console.log(funcionario);
  }

}
