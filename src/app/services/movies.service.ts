import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseurl = "https://api.themoviedb.org/3";
  apikey = "06cc335abc6769f2ba982c824990faeb";

  constructor (private http: HttpClient) { }


  bannerApiData (): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/day?api_key=${this.apikey}`);
  }


  trendingMovieApiData (): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/movie/week?api_key=${this.apikey}`);
  }

  getSearchMovie (data: any): Observable<any> {
    console.log(data, 'movie#');
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  }

  getMovieDetails (data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
  }

  getMovieVideo (data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
  }

  getMovieCast (data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
  }

  fetchActionMovies (): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
  }

  fetchAdventureMovies (): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`);
  }

  fetchAnimationMovies (): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`);
  }

  // comedy
  fetchComedyMovies (): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`);
  }

  fetchDocumentaryMovies (): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`);
  }


  fetchScienceFictionMovies (): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`);
  }

  fetchThrillerMovies (): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`);
  }
}
