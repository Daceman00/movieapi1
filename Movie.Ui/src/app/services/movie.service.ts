import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url = "Movie";

  constructor(private http: HttpClient) { }

  public getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateMovie(movie: Movie): Observable<Movie[]>{
    return this.http.put<Movie[]>(`${environment.apiUrl}/${this.url}`, movie);
  }

  public createMovie(movie: Movie): Observable<Movie[]>{
    return this.http.post<Movie[]>(`${environment.apiUrl}/${this.url}`, movie);
  }

  public deleteMovie(movie : Movie): Observable<Movie[]>{
    return this.http.delete<Movie[]>(`${environment.apiUrl}/${this.url}/${movie.id}`);
  }
}
