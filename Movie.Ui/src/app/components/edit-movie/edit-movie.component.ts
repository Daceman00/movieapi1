import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  @Input() movie?: Movie;
  @Output() moviesUpdated = new EventEmitter<Movie[]>();

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
      
  }

  updateMovie(movie:Movie){
    this.movieService
    .updateMovie(movie)
    .subscribe((heroes: Movie[]) => this.moviesUpdated.emit(heroes) )
  }

  deleteMovie(movie:Movie){
    this.movieService
    .deleteMovie(movie)
    .subscribe((heroes: Movie[]) => this.moviesUpdated.emit(heroes) )
  }

  createMovie(movie:Movie){
    this.movieService
    .createMovie(movie)
    .subscribe((heroes: Movie[]) => this.moviesUpdated.emit(heroes) )
  }

}
