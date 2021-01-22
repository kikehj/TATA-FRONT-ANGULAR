import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';;

import { AppComponent } from './app.component';
import { ListPersonsComponent } from './components/list-persons/list-persons.component';
import { personService } from './components/person-service/person-service.component';
import { CreatePersonComponent } from './components/create-person/create-person.component';
import { UpdatePersonComponent } from './components/update-person/update-person.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPersonsComponent,
    CreatePersonComponent,
    UpdatePersonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule, 
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule   
  ],
  providers: [personService],
  bootstrap: [AppComponent]
})
export class AppModule { }
