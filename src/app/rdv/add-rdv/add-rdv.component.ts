import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Doctors } from 'src/app/model/doctors';
import { Rdv } from 'src/app/model/rdv';
import { DoctorsService } from 'src/app/shared/doctors.service';
import { RdvService } from 'src/app/shared/rdv.service';

@Component({
  selector: 'app-add-rdv',
  templateUrl: './add-rdv.component.html',
  styleUrls: ['./add-rdv.component.css']
})
export class AddRdvComponent implements OnInit {

  f: NgForm;
  rdv: Rdv;
  listrdv: Rdv[];
  listdocs: Doctors[];
  doctor: Doctors;

  email: string;
  username: string;
  phone: number;
  cnt:number;
  storeduser:Array<any>;

  @Output() saveEvent = new EventEmitter<Rdv>();

  constructor(private rdvService:RdvService,
              private service: ToastrService,
              private docService: DoctorsService, ) { }

  ngOnInit(): void {
    this.rdv = new Rdv();
    this.docService.getDoctors().subscribe(
      (data: Doctors[]) => this.listdocs = data
    )
    

    this.storeduser = JSON.parse(localStorage.getItem("connecteduser"));
    if ((typeof this.storeduser !== 'undefined' && this.storeduser !== null)) {
        this.cnt = 1;

        var test = localStorage.getItem('connecteduser');
        interface us {
        email:string;
        username:string;
        phone:number;
      }
      let obj: us = JSON.parse(test);
      this.email=obj.email;
      this.username=obj.username;
      this.phone=obj.phone;

      } else {
        this.cnt = 0;
      }


  }


  addRdv(){
    
      this.saveEvent.emit(this.rdv);
      this.rdvService.addURdv(this.rdv).subscribe(
        () => this.listrdv = [this.rdv, ...this.listrdv]
      );
      setTimeout(() => {
        this.service.success('Appointment saved !', 'Success',{
        timeOut: 3000,
        progressBar: true,
        progressAnimation: 'increasing'
        });
    }, 500);

    window.location.href="http://localhost:4200/rdv";
  }

}
