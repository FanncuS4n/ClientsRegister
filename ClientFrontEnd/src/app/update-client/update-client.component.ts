import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrl: './update-client.component.css'
})
export class UpdateClientComponent {

  form: FormGroup;

  id: number;

  constructor(private fb: FormBuilder, private dialogref: MatDialogRef<UpdateClientComponent>,
    @Inject(MAT_DIALOG_DATA) private data: {client_Name: string, surname: string, address: string, phone: string, id: number})
    {
      this.id = data.id;
      this.form = fb.group({
        client_Name: [data.client_Name, Validators.required],
        surname: [data.surname, Validators.required],
        address: [data.address, Validators.required],
        phone: [data.phone, Validators.required]
      })
    }

  ngOnInit(): void{

  }

}
