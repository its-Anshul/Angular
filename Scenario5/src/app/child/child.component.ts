import { Component, OnInit, Input } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private data: DataService) { }


  value='';

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.value = message)
  }

  setValue(value){
    this.value = value;
    this.data.changeMessage(this.value);
  }


}
