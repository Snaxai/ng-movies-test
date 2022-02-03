import { Injectable } from '@angular/core';
import { IMovie, IMovieResponse } from '../models/movie.model';
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs';
import { environment } from 'src/environments/environment';

const URL = environment.moviesAPIURL

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private _movies: IMovie[] = [];
  private _loading: boolean = false;

  // getter
  get movies(): IMovie[] {
    return this._movies;
  }

  get loading(): boolean {
    return this._loading;
  }
  constructor(private http: HttpClient) {}

  findAllMovies(): void {
    this._loading = true;
    this.http
      .get<IMovieResponse>(URL)
      // RxJS Operators
      .pipe(
        map((response: IMovieResponse) => {
          return response.data;
        }),
        finalize(() => {
          // JUst before everything is over!
          this._loading = false;
        })
      )
      .subscribe({
        next: (movies: IMovie[]) => {
          this._movies = movies;
        },
      });
  }
}
