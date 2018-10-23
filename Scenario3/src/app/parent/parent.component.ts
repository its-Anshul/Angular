import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  values = '';

  loadComponent;

  getValue(value){
    this.values = value;
    return this.values;
  }

  loadMyChildComponent() {
    this.loadComponent = true;
  }
}

