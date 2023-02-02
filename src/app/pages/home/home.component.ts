import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bannerResult?: any = [];
  trendingMovieResult?: any = [];
  actionMovieResult?: any = [];
  adventureMovieResult?: any = [];
  animationMovieResult?: any = [];
  comedyMovieResult?: any = [];
  documentaryMovieResult?: any = [];
  sciencefictionMovieResult?: any = [];
  thrillerMovieResult?: any = [];

  constructor (private moviesService: MoviesService, private title: Title, private meta: Meta) { }

  ngOnInit (): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
  }

  bannerData () {
    this.moviesService.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    });
  }

  trendingData () {
    this.moviesService.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMovieResult = result.results;
      // this.trendingMovieResult
    });
  }

  actionMovie () {
    this.moviesService.fetchActionMovies().subscribe((result) => {
      this.actionMovieResult = result.results;
    });
  }

  adventureMovie () {
    this.moviesService.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
    });
  }

  animationMovie () {
    this.moviesService.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.results;
    });
  }

  comedyMovie () {
    this.moviesService.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
    });
  }

  documentaryMovie () {
    this.moviesService.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieResult = result.results;
    });
  }

  sciencefictionMovie () {
    this.moviesService.fetchScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieResult = result.results;
    });
  }

  thrillerMovie () {
    this.moviesService.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
    });
  }

}
