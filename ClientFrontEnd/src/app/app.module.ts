import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app.router.module';
import { ClientComponent } from './client/client.component';
import { ClientService } from './client.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { DeleteClientComponent } from './delete-client/delete-client.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    FooterComponent,
    HeaderComponent,
    CreateClientComponent,
    UpdateClientComponent,
    DeleteClientComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatListModule,
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration(),
    ClientService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
