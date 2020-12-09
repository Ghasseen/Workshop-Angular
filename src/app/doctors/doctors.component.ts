import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Doctors } from '../model/doctors';
import { DoctorsService } from '../shared/doctors.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  listdocs: Doctors[];
  @Input() doctor:Doctors;
  @Output() notification = new EventEmitter<Doctors>();

  username: string;
  cnt:number;
  storeduser:Array<any>;

  constructor(private docService: DoctorsService,) { }

  ngOnInit(): void { 
    this.doctor.like = 0;
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

  sendNotif(){
    
    this.notification.emit(this.doctor);
  }

}
