import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username: string;
  email: string;
  pwd: string;
  phone: number;
  birth: Date;
  gender: string;
  id:number;
  cnt:number;
  storeduser:Array<any>;
  constructor(private router: Router) { }
  
  ngOnInit(): void {
    this.storeduser = JSON.parse(localStorage.getItem("connecteduser"));
    if ((typeof this.storeduser !== 'undefined' && this.storeduser !== null)) {
        this.cnt = 1;

        var test = localStorage.getItem('connecteduser');
        interface us {
          ids:number
          username: string;
          email: string;
          pwd: string;
          phone: number;
          birth: Date;
          gender: string;
      }
      let obj: us = JSON.parse(test);
      this.id=obj.ids;
      this.username=obj.username;
      this.email=obj.email;
      this.pwd=obj.pwd;
      this.phone=obj.phone;
      this.birth=obj.birth;
      this.gender=obj.gender;

      } else {
        this.cnt = 0;
      }
  }

  update(id){
    this.router.navigate(['update-user', id]);
  }



}
