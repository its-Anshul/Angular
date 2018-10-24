import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IMovie } from './http/Movie'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _url: string ="http://localhost:8081/movie/"

  constructor(private http : HttpClient) { }

  getMovie(): Observable<IMovie[]>{
    console.log(this.http.get<IMovie[]>(this._url));
    return this.http.get<IMovie[]>(this._url);
  }

  getMovieById(id): Observable<IMovie[]>{
    console.log(this.http.get<IMovie[]>(this._url + id));
    return this.http.get<IMovie[]>(this._url + id);
  }

}

