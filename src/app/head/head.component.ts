import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from '../model/user';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  username: string;
  email:string;
  cnt:number;
  storeduser:Array<any>;
  router: any;
  constructor(private service: ToastrService) { }

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

  
  logout(){
    localStorage.clear();
    this.reloadPage();
    window.location.href="http://localhost:4200/home";    
  }

  reloadPage() {
    window.location.reload();
  }


}
