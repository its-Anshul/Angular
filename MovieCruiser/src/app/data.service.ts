import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { APIMovie } from './http/APIMovie'
import { Observable } from 'rxjs';
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IMovie } from './http/Movie'

@Injectable({
  providedIn: 'root'
})
export class DataService {

 private _apiUrl: string = "https://api.themoviedb.org/3/movie/157336?api_key=258e893e44817dcbf97633ef342d0879"
 private _url: string ="http://172.17.0.1:8081/movie"

  // "https://api.themoviedb.org/3/movie/550?api_key=258e893e44817dcbf97633ef342d0879"
  
  constructor(private http : HttpClient) { }

  getMovie(): Observable<IMovie[]>{
    return (this.http.get<IMovie[]>(this._url))
          .pipe(catchError(err => {
            console.log(err.error);
            return throwError(err.error)}))
 }

  getAllMoviesFromAPI(): Observable<APIMovie[]>{
    // console.log(this.http.get<APIMovie[]>(this._apiUrl));
    // console.log("hello");
    return this.http.get<APIMovie[]>(this._apiUrl)
        .pipe(catchError(err => {
              console.log(err.error);
              return throwError(err.error)}));
   
  }

  getMovieByNameFromAPI(name): Observable<APIMovie[]>{
   // console.log(this.http.get<APIMovie[]>(this._apiUrl + "&query=" + name)[0]);
    return this.http.get<APIMovie[]>("http://api.themoviedb.org/3/movie/157336?api_key=258e893e44817dcbf97633ef342d0879&query=a")
      .pipe(catchError(err => {
            console.log(err.error);
            return throwError(err.error)}));
  }

  

  convertJSONtoObj(myJSON){
  var myObj = JSON.parse(myJSON);
  return myObj;
  }



}

