import { Component, ViewChild } from '@angular/core';
import { ClientService } from '../client.service';
import { ClientInterface } from '../Interfaces/ClientInterface';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UpdateClientComponent } from '../update-client/update-client.component';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {

  dataSource: any = [];

  displayedColumns: string[] = ['client_Name', 'surname', 'adress', 'phone', 'Actions'];

  @ViewChild (MatPaginator) paginator: MatPaginator | any;

  constructor(private service: ClientService, private dialog: MatDialog, private router: Router){}

  ngOnInit(): void {
    this.service.getClientes().subscribe((data:any) => {
      this.dataSource = new MatTableDataSource<ClientInterface>(data.result as ClientInterface[]);
      this.dataSource.paginator = this.paginator;
    }, 
    (errorData) => this.router.navigate(['/login']));
  }

  applyFilter(filter: any){
    this.dataSource.filter = filter.target.value.trim().toLowerCase();
  }

  updateClient(client: ClientInterface){
    this.dialog.open(UpdateClientComponent, {
      data: {
        client_Name: client.client_Name,
        surname: client.surname,
        adress: client.adress,
        phone: client.phone,
        id: client.id
      }
    });
  }
}
