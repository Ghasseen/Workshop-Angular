import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Doctors } from 'src/app/model/doctors';
import { Rdv } from 'src/app/model/rdv';
import { DoctorsService } from 'src/app/shared/doctors.service';
import { RdvService } from 'src/app/shared/rdv.service';

@Component({
  selector: 'app-update-rdv',
  templateUrl: './update-rdv.component.html',
  styleUrls: ['./update-rdv.component.css']
})
export class UpdateRdvComponent implements OnInit {
  rdv: Rdv;
  id:number;
  listdocs: Doctors[];

  email: string;
  username: string;
  phone: number;
  cnt:number;
  storeduser:Array<any>;

  constructor(private rdvs:RdvService,
              private serviceT: ToastrService,
              private router: Router,
              private docService: DoctorsService,
              private service:ActivatedRoute) { }

  ngOnInit(): void {
    this.docService.getDoctors().subscribe(
      (data: Doctors[]) => this.listdocs = data)

    this.rdv = new Rdv();
    this.id = this.service.snapshot.params['id'];
    this.rdvs.getOnlyrdv(this.id)
    .subscribe(data=>{
      console.log(data)
      this.rdv = data;
    }, 
    error => console.log(error));

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

  update(){
    this.rdvs.updateRdv(this.rdv.id,this.rdv).subscribe(
      data => console.log(data), error => console.log(error));
      this.rdv = new Rdv();

      this.serviceT.info('Your appointment has been updated successfully !', 'Success',{
        timeOut: 4000,
        progressBar: true,
        progressAnimation: 'increasing'
        });

      this.back();
  }

  back(){
    this.router.navigate(['rdv']);
  }

}
