import { Component, OnInit } from '@angular/core';
import { Doctors } from '../model/doctors';
import { DoctorsService } from '../shared/doctors.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  listdocs: Doctors[];
  doctor: Doctors;
  constructor(private docService: DoctorsService,) { }

  ngOnInit(): void {
    this.docService.getDoctors().subscribe(
      (data: Doctors[]) => this.listdocs = data
    )
  }

}
