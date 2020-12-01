import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ToastrService) { }

  ngOnInit(): void {
  }

  Err(){
    this.service.warning('You need to Login First !', 'Warning');
  }

}
