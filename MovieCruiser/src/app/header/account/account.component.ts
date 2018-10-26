import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private DataService : DataService){};

  errorMsg='';

  movie;

  json = '{"id": 10, "name": "Star Wars Collection", "overview": "An epic space opera theatrical film series created by George Lucas.The first film in the franchise was originally released on May 25, 1977, by 20th Century Fox, and became a worldwide pop culture  phenomenon, followed by two sequels, released at three-year intervals. Sixteen years after the release of the trilogys final film, the first in a new prequel trilogy of films was released, again released at three-year intervals, with the final film released on May 19, 2005.", "poster_path": null, "backdrop_path": "/shDFE0i7josMt9IKXdYpnMFFgNV.jpg", "parts": null }';

  ngOnInit() {
    this.movie = this.DataService.convertJSONtoObj(this.json);
    console.log(this.movie.name);
 }
  
  onClick(){
    console.log("again working");
  }

}
