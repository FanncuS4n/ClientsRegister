import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl: string = 'https://localhost:7237/api/Clients';

  constructor(private http: HttpClient) { }

getClientes(){
  return this.http.get(this.baseUrl)
}

}
