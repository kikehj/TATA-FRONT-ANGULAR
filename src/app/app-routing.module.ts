import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListPersonsComponent} from './components/list-persons/list-persons.component';
import { CreatePersonComponent } from './components/create-person/create-person.component';
import { UpdatePersonComponent } from './components/update-person/update-person.component';

const routes: Routes = [

  { path: 'list', component: ListPersonsComponent },
  { path: 'create', component: CreatePersonComponent },
  { path: 'update', component: UpdatePersonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
