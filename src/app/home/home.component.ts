import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Doctors } from '../model/doctors';
import { DoctorsService } from '../shared/doctors.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string;
  cnt:number;
  storeduser:Array<any>;

  listdocs: Doctors[];

  constructor(private service: ToastrService,
              private docService:DoctorsService) { }

  ngOnInit(): void {
    this.docService.getDoctors().subscribe(
      (data: Doctors[]) => this.listdocs = data
    )

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

  incrementLike(doc: Doctors){
    let i = this.listdocs.indexOf(doc);
    this.listdocs[i].like++;
  }
  incrementDislike(i :number){
    this.listdocs[i].like--;
  }

}
