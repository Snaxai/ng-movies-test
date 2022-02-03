import { IMovie } from './../../models/movie.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {

  @Input() movie!: IMovie

  constructor() { }

  ngOnInit(): void {
  }

  onWatchlistClick() {
    console.log("watchlist service");
    
  }

}
