import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rdv } from '../model/rdv';

@Injectable({
  providedIn: 'root'
})
export class RdvService {

  url = 'http://localhost:3000/rdv/';

  constructor(private http: HttpClient) { }

  getrdvs(){
    return this.http.get<Rdv[]>('http://localhost:3000/rdv');
  }

  addURdv(rdv: Rdv) {
    return this.http.post(this.url, rdv);
  }

  deleteRdv(idr) {
    return this.http.delete(this.url + idr);
  }

  getOnlyrdv(id:number): Observable<any>{
    return this.http.get(`${this.url}${id}`);
  }

  updateRdv(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.url}/${id}`, value);
  }

  searchrdv(searchinput)
  {
    return this.http.get<Rdv[]>('http://localhost:3000/rdv/?q=' + searchinput);
  }
  
}
