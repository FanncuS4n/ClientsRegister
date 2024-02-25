import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { ClientInterface } from '../Interfaces/ClientInterface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {

  dataSource: any = [];

  displayedColumns: string[] = ['client_Name', 'surname', 'adress', 'phone'];

  constructor(private service: ClientService){}
  ngOnInit(): void {
    this.service.getClientes().subscribe((data:any) => {
      this.dataSource = new MatTableDataSource<ClientInterface>(data.result as ClientInterface[]);
      console.log(data);
    });
  }
}
