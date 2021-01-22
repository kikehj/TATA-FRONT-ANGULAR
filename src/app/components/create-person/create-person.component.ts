import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { person } from '../person/person.component';
import { personService } from '../person-service/person-service.component';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  p:person;

  constructor(private route:ActivatedRoute, private router:Router, private personSrv:personService) {

    this.p = new person();

   }

   onSubmit(){
     console.log(this.p);
     this.personSrv.create(this.p).subscribe(result=>this.goToPersonList());
   }

   goToPersonList(){
     this.router.navigate(['/list']);
   }

  ngOnInit(): void {
  }

}
