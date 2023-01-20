import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctors } from '../model/doctors';

@Injectable({
  providedIn: 'root',
})
export class DoctorsService {
  url: 'http://localhost:8080/medilab';
  constructor(private http: HttpClient) {}

  getDoctors() {
    return this.http.get<Doctors[]>(this.url);
  }

  rechercherdocteur(searchinput) {
    return this.http.get<Doctors[]>(this.url + searchinput);
  }
}
