import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css']
})
export class DeleteClientComponent {

  id: any;

  client = {
    client_Names: '',
    Surnames: '',
    Address: '',
    Phone: ''
  }

  constructor(private service: ClientService,
    private route: ActivatedRoute,
    private router: Router){}

    ngOnInit(): void{
      this.id = this.route.snapshot.paramMap.get('id');
      this.service.getClient(this.id).subscribe((data: any)=>{
        console.log(data.result);


        this.client.client_Names = data.result.client_Name;
        this.client.Surnames = data.result.surname;
        this.client.Address = data.result.adress;
        this.client.Phone = data.result.phone;
      })
    }

  cancel(){
    this.router.navigate(['/']);
  }

  confirm(){
    this.service.deleteClient(this.id).subscribe((data:any)=>{
      this.router.navigate(['/']);
    });
  }
}
