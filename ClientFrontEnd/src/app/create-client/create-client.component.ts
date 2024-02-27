import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.css'
})
export class CreateClientComponent {

  constructor(private service: ClientService, private router: Router){}

  clientForm = new FormGroup({
    client_Name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    adress: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  });

  onSubmit() {
    console.log(this.clientForm.value);
    // this.service.createClient(this.clientForm.value).subscribe((data:any) =>{
    //   alert("Created CLIENT");
    //   this.router.navigate(['/clients']);
    // })
  }
}
