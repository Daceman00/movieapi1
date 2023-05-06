import { Component } from '@angular/core';
import { MovieService } from './services/movie.service';
import { Movie } from './models/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie.Ui';
  movies: Movie[] = [];
  movieToEdit?: Movie;

  constructor(private movieService: MovieService) {}

  ngOnInit() : void {
    this.movieService.getMovies().subscribe((result: Movie[]) => (this.movies = result));
  }

  updateMovieList(movies: Movie[]) {
    this.movies = movies;
  }

  initNewMovie() {
    this.movieToEdit = new Movie();
  }

  editMovie(movie: Movie){
    this.movieToEdit = movie;
  }
}
