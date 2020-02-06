import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  baseUrl: string = '/person/api/v1';

  constructor(private http: HttpClient) { }


  savePerson(person:any):any {
    return this.http.post(this.baseUrl + '/person', person);
  }

  deletePerson(id:any):any {
    return this.http.delete(this.baseUrl + '/person/'+id);
  }

  findPerson(id:any):any {
    return this.http.delete(this.baseUrl + '/person/'+id);
  }

  findAllPersons():any {
    return this.http.get(this.baseUrl + '/person/');
  }



}
