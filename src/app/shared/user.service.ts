import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/visitors/';

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.url + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user.result.succeeded) {
          localStorage.setItem('token', user.token);
        }
      })
    )
  }

  addUser(user: User) {
    return this.http.post(this.url, user);
  }

  deleteUser(id) {
    return this.http.delete(this.url + id);
  }

  getUser(id:number): Observable<any>{
    return this.http.get(`${this.url}${id}`);
  }

  updateUser(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.url}/${id}`, value);
  }


}
