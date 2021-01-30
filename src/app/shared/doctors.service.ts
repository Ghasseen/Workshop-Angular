import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctors } from '../model/doctors';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  url : "http://localhost:3000/doctors/";
  constructor(private http: HttpClient) { }

  getDoctors(){
    return this.http.get<Doctors[]>('http://localhost:3000/doctors');
  }

  rechercherdocteur(searchinput)
  {
    return this.http.get<Doctors[]>('http://localhost:3000/doctors/?q=' + searchinput);
  }

}
