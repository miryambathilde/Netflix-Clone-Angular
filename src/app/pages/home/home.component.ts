import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movies';
import { MoviesService } from 'src/app/services/movies.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingMoviesResults?: Movie[] = [];
  discoverMoviesResults?: Movie[] = [];
  actionMovieResults?: Movie[] = [];
  adventureMovieResults?: Movie[] = [];
  animationMovieResults?: Movie[] = [];
  comedyMovieResults?: Movie[] = [];
  documentaryMovieResults?: Movie[] = [];
  sciencefictionMovieResults?: Movie[] = [];
  thrillerMovieResults?: Movie[] = [];

  constructor (private moviesService: MoviesService, private userService: UserService, private title: Title, private meta: Meta, private router: Router) { }

  ngOnInit (): void {
    this.trendingMovies();
    this.discoverMovies();
    this.actionMovies();
    this.adventureMovies();
    this.comedyMovies();
    this.animationMovies();
    this.documentaryMovies();
    this.sciencefictionMovies();
    this.thrillerMovies();
  }

  trendingMovies () {
    this.moviesService.getTrendingMovies().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMoviesResults = result.results;
    });
  }

  discoverMovies () {
    this.moviesService.getDiscoverMovies().subscribe((result) => {
      console.log(result, 'discoverresult#');
      this.discoverMoviesResults = result.results;
    });
  }

  actionMovies () {
    this.moviesService.getActionMovies().subscribe((result) => {
      this.actionMovieResults = result.results;
    });
  }

  adventureMovies () {
    this.moviesService.getAdventureMovies().subscribe((result) => {
      this.adventureMovieResults = result.results;
    });
  }

  animationMovies () {
    this.moviesService.getAnimationMovies().subscribe((result) => {
      this.animationMovieResults = result.results;
    });
  }

  comedyMovies () {
    this.moviesService.getComedyMovies().subscribe((result) => {
      this.comedyMovieResults = result.results;
    });
  }

  documentaryMovies () {
    this.moviesService.getDocumentaries().subscribe((result) => {
      this.documentaryMovieResults = result.results;
    });
  }

  sciencefictionMovies () {
    this.moviesService.getScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieResults = result.results;
    });
  }

  thrillerMovies () {
    this.moviesService.getThrillerMovies().subscribe((result) => {
      this.thrillerMovieResults = result.results;
    });
  }
}
