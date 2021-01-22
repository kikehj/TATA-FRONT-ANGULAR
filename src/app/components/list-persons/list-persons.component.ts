import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { person } from '../person/person.component';
import { personService} from '../person-service/person-service.component';

@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.css']
})
export class ListPersonsComponent implements OnInit {

  persons:person[];
  p:person;

  constructor(private route:ActivatedRoute, private router:Router, private personSrv:personService) {
    this.p = new person();
   }

  ngOnInit(): void {
    this.personSrv.read().subscribe( data => { this.persons=data;} );

  }

  delete(num:number){
    this.personSrv.delete(num);
    window.location.reload();
  }

  update(p:person){
    this.goToEdit(p);
  }

  goToEdit(p:person){
   
    this.router.navigate(['/update'],{queryParams:{id:p.id,name:p.name,address:p.address,dob:p.dob}})
  }



}
