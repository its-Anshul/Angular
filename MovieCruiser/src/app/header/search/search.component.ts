import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { APIMovie } from 'src/app/http/APIMovie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private DataService : DataService) { }

  ngOnInit() {
  }

  movie : APIMovie[];

  onClick(){

    var searchItem = document.getElementsByTagName("input")[0].value;
    console.log(searchItem);
    this.DataService.getMovieByNameFromAPI(searchItem)
                    .subscribe(data=>this.movie=data);
    console.log(this.movie);
    
  }

}
