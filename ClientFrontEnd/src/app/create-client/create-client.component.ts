import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.css'
})
export class CreateClientComponent {

  clientForm = new FormGroup({
    client_Name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    adress: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  });

  onSubmit() {
    console.log(this.clientForm.value);
  }
}
