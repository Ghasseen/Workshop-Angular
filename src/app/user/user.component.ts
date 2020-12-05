import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username: string;
  email:string;
  cnt:number;
  storeduser:Array<any>;
  router: any;
  constructor() { }
  
  ngOnInit(): void {
    this.storeduser = JSON.parse(localStorage.getItem("connecteduser"));
    if ((typeof this.storeduser !== 'undefined' && this.storeduser !== null)) {
        this.cnt = 1;

        var test = localStorage.getItem('connecteduser');
        interface us {
        username:string;
        email:string;
      }
      let obj: us = JSON.parse(test);
      this.username=obj.username;
      this.email=obj.email;

      } else {
        this.cnt = 0;
      }
  }



}
