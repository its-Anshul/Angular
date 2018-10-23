import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  values = '';

  onKey(event: any) { 
    this.values += event.target.value + ' | ';
  }

}
