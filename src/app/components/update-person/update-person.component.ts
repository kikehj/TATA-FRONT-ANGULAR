import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { person } from '../person/person.component';
import { personService } from '../person-service/person-service.component';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {

  p:person;
  id:String;

  constructor(private route:ActivatedRoute, private router:Router, private personSrv:personService) { 

    this.p = new person();

  }

  cancel(){
    this.router.navigate(['/list']);
  }

  onSubmit(){
    this.personSrv.update(this.p).subscribe(result=>this.goToList());
    }

    goToList(){

      this.router.navigate(['/list']);

    }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params=>{
        
        this.p.id=params['id'];
        this.p.name=params['name'];
        this.p.address=params['address'];
        this.p.dob=params['dob'];
      })
  }

}
