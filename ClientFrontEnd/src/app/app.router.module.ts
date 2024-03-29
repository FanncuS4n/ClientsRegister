import { RouterModule, Routes } from "@angular/router";
import { ClientComponent } from "./client/client.component";
import { NgModule } from "@angular/core";
import { CreateClientComponent } from "./create-client/create-client.component";
import { DeleteClientComponent } from "./delete-client/delete-client.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";

//route
const routes:Routes = [
    {path: '', component: ClientComponent},
    {path: 'clients', component: ClientComponent},
    {path: 'create-client', component: CreateClientComponent},
    {path: 'delete-client/:id', component:DeleteClientComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'login', component:LoginComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouterModule{

}