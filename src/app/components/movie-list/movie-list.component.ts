import { IMovie } from './../../models/movie.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  @Input() movies: IMovie[] = [];
  @Output() goToMovie: EventEmitter<IMovie> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onMovieClick(movie: IMovie) {
    console.log('MOVIE CLICKED', movie.title);
    this.goToMovie.emit(movie); // Notify the parent
  }
}
