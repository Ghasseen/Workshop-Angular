import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string;
  cnt:number;
  storeduser:Array<any>;
  constructor(private service: ToastrService) { }

  ngOnInit(): void {
    this.storeduser = JSON.parse(localStorage.getItem("connecteduser"));
    if ((typeof this.storeduser !== 'undefined' && this.storeduser !== null)) {
        this.cnt = 1;

        var test = localStorage.getItem('connecteduser');
        interface us {
        username:string;
      }
      let obj: us = JSON.parse(test);
      this.username=obj.username;

      } else {
        this.cnt = 0;
      }
  }

  Err(){
    this.service.warning('You need to Login First !', 'Warning');
  }

}
