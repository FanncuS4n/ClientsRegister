import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { ClientInterface } from '../Interfaces/ClientInterface';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UpdateClientComponent } from '../update-client/update-client.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {

  dataSource: any = [];

  displayedColumns: string[] = ['client_Name', 'surname', 'adress', 'phone', 'Actions'];

  constructor(private service: ClientService, private dialog: MatDialog){}

  ngOnInit(): void {
    this.service.getClientes().subscribe((data:any) => {
      this.dataSource = new MatTableDataSource<ClientInterface>(data.result as ClientInterface[]);
    });
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
