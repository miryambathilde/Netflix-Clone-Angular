import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseURL = "https://api.themoviedb.org/3";
  apikey = "06cc335abc6769f2ba982c824990faeb";

  constructor (private http: HttpClient) { }


  sliderMovies (): Observable<any> {
    return this.http.get(`${this.baseURL}/trending/all/day?api_key=${this.apikey}`);
  }


  getTrendingMovies (): Observable<any> {
    return this.http.get(`${this.baseURL}/trending/movie/week?api_key=${this.apikey}`);
  }

  getSearchMovie (data: any): Observable<any> {
    console.log(data, 'movie#');
    return this.http.get(`${this.baseURL}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  }

  getMovieDetails (data: any): Observable<any> {
    return this.http.get(`${this.baseURL}/movie/${data}?api_key=${this.apikey}`)
  }

  getMovieVideo (data: any): Observable<any> {
    return this.http.get(`${this.baseURL}/movie/${data}/videos?api_key=${this.apikey}`)
  }

  getMovieCast (data: any): Observable<any> {
    return this.http.get(`${this.baseURL}/movie/${data}/credits?api_key=${this.apikey}`)
  }

  getActionMovies (): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.apikey}&with_genres=28`);
  }

  getAdventureMovies (): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.apikey}&with_genres=12`);
  }

  getAnimationMovies (): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.apikey}&with_genres=16`);
  }

  getComedyMovies (): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.apikey}&with_genres=35`);
  }

  getDocumentaries (): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.apikey}&with_genres=99`);
  }


  getScienceFictionMovies (): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.apikey}&with_genres=878`);
  }

  getThrillerMovies (): Observable<any> {
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.apikey}&with_genres=53`);
  }
}
