import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientInterface } from './Interfaces/ClientInterface';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  baseUrl: string = 'https://localhost:7237/api/Clients/';

  constructor(private http: HttpClient) { }

  getClientes(){
    return this.http.get(this.baseUrl)
  }

  getClient(id: number){
    return this.http.get(this.baseUrl + id)
  }

  createClient(client: ClientInterface){
    return this.http.post(this.baseUrl, client);
  }

  updateClient(id: number, client: ClientInterface){
    return this.http.put(this.baseUrl + id, client);
  }

  deleteClient(id: number){
    return this.http.delete(this.baseUrl + id);
  }
}
