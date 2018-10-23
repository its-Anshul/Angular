import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
 
@Component({
  selector: 'app-grand',
  templateUrl: './grand.component.html',
  styleUrls: ['./grand.component.css']
})
export class GrandComponent implements OnInit {

  constructor(private data: DataService) { }

  message;

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

}
