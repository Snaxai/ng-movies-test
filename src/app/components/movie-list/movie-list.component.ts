import { IMovie } from './../../models/movie.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  @Input() movies: IMovie[] = [];

  @Output() setFavouriteMovie: EventEmitter<IMovie> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  goToMovie(movie: IMovie) {
    console.log('MOVIE CLICKED', movie.title);
    this.setFavouriteMovie.emit(movie); // Notify the parent
  }
}
