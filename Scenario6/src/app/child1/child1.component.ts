import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private data: DataService) { }
  
  value='';

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.value = message);
  }

  setValue(value){
    this.value = value;
    this.data.changeMessage(this.value);
  }

}
