import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientInterface } from './Interfaces/ClientInterface';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  baseUrl: string = 'https://localhost:7237/api/Clients/';

  constructor(private http: HttpClient) { }

  getClientes(){
    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })

    return this.http.get(this.baseUrl, {headers: headers})
  }

  getClient(id: number){
    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })

    return this.http.get(this.baseUrl + id, {headers: headers})
  }

  createClient(client: ClientInterface){
    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })

    return this.http.post(this.baseUrl, client, {headers: headers});
  }

  updateClient(id: number, client: ClientInterface){
    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })

    return this.http.put(this.baseUrl + id, client, {headers: headers});
  }

  deleteClient(id: number){
    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })

    return this.http.delete(this.baseUrl + id, {headers: headers});
  }
}
