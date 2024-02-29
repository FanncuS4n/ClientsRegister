import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';


@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent {

  constructor(private service: ClientService, private router: Router){}

  clientForm = new FormGroup({
    client_Name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    adress: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  })

  onSubmit() {
    console.log(this.clientForm.value);

    

    this.service.createClient({
      client_Name: this.clientForm.value.client_Name ?? '',
      surname: this.clientForm.value.surname ?? '',
      adress: this.clientForm.value.adress ?? '',
      phone: this.clientForm.value.phone ?? ''
    }).subscribe((data:any) =>{
      alert("Created CLIENT");
      this.router.navigate(['/']);
    })
  }
}
