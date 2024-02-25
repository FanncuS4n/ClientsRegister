import { RouterModule, Routes } from "@angular/router";
import { ClientComponent } from "./client/client.component";
import { NgModule } from "@angular/core";

//route
const routes:Routes = [
    {path: '', component: ClientComponent},
    {path: 'clients', component: ClientComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouterModule{

}