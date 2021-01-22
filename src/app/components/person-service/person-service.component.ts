import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {person} from '../person/person.component';

@Injectable()
export class personService{

  private personsURL: string;

  constructor(private http: HttpClient){
    this.personsURL='http://localhost:10091/crud';
  }

  public create(p:person){
    return this.http.post<person>(this.personsURL + "/create", p);
  }

  public read():Observable<person[]>{
    return this.http.get<person[]>(this.personsURL + "/read");
  }

  public update(p:person){
    return this.http.post<person>(this.personsURL + "/update", p);
  }

  public delete(num:number){
   
      this.http.delete(this.personsURL + "/delete/" + num).subscribe( data => {console.log(data)});
       
  }

}