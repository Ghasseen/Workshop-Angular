import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Rdv } from '../model/rdv';
import { RdvService } from '../shared/rdv.service';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RdvComponent implements OnInit {
  listrdv: Rdv[];
  rdv:Rdv;
  router: any;
  id:number;
  cnt:number;
  storeduser:Array<any>;

  constructor(private rdvs:RdvService,
              private service: ToastrService) { }

  ngOnInit(): void {
    this.rdv = new Rdv();
    this.rdvs.getrdvs().subscribe(
      (data:Rdv[]) => this.listrdv = data );

      this.storeduser = JSON.parse(localStorage.getItem("connecteduser"));
    if ((typeof this.storeduser !== 'undefined' && this.storeduser !== null)) {
        this.cnt = 1;

        var test = localStorage.getItem('connecteduser');
        interface us {
        ids:number        
      }
      let obj: us = JSON.parse(test);
      this.id=obj.ids;
      } else {
        this.cnt = 0;
      }
  }

  delete(id) {
    this.rdvs.deleteRdv(id).subscribe(
      () => this.listrdv = this.listrdv
      .filter(rdv => rdv.id != id));

      this.service.warning('Your ppointment has been deleted successfully !', 'Success',{
        timeOut: 4000,
        progressBar: true,
        progressAnimation: 'increasing'
        });
  }

  update(id){
    this.router.navigate(['updaterdv', id]);
  }

}


