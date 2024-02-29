import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { ClientInterface } from '../Interfaces/ClientInterface';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrl: './update-client.component.css'
})
export class UpdateClientComponent {


  form: FormGroup;
  id: number;

  constructor(private fb: FormBuilder, 
    private dialogref: MatDialogRef<UpdateClientComponent>,
    @Inject(MAT_DIALOG_DATA) private data: {client_Name: string, surname: string, adress: string, phone: string, id: number}
    , private service: ClientService
    , private router: Router){

      this.id = data.id;
      this.form = fb.group({
        client_Name: [data.client_Name, Validators.required],
        surname: [data.surname, Validators.required],
        adress: [data.adress, Validators.required],
        phone: [data.phone, Validators.required]
      })

      console.log(this.id);
      console.log(this.form.value);
    }

    close(){
      this.dialogref.close();
    }
    
    save(){
      this.form.value.id = this.id;

      this.service.updateClient(this.id, this.form.value).subscribe((data:any)=>{
        this.router.navigate(['/']);
        window.location.reload();
      });
      
      this.dialogref.close();
    }

  ngOnInit(): void{}

}
