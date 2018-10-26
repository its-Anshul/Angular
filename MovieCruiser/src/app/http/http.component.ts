import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private DataService : DataService) { }

  public movie = [];

  public errorMsg = '';

  ngOnInit() {
     this.DataService.getMovie()
         .subscribe(data => this.movie = data,
          error=> this.errorMsg = error);
      console.log(this.movie);
  }
  

}
