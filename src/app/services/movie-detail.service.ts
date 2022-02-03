import { HttpClient } from '@angular/common/http';
import { IMovie, IMovieDetailResponse } from './../models/movie.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

const URL = environment.moviesAPIURL;

@Injectable({
  providedIn: 'root',
})
export class MovieDetailService {
  private _movie?: IMovie;

  get movie(): IMovie | undefined {
    return this._movie;
  }

  constructor(private http: HttpClient) {}

  findMovieById(movieId: string): void {
    this._movie = undefined;

    this.http
      .get<IMovieDetailResponse>(`${URL}/${movieId}`)
      .pipe(map((response: IMovieDetailResponse) => response.data))
      .subscribe({
        next: (movie: IMovie) => {
          this._movie = movie;
        },
      });
  }
}
