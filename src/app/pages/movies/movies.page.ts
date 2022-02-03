import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IMovie } from './../../models/movie.model';
import { MoviesService } from './../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.css'],
})
export class MoviesPage implements OnInit {
  get movies(): IMovie[] {
    return this.moviesService.movies;
  }

  get username(): string {
    return this.userService.username;
  }

  constructor(
    private moviesService: MoviesService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.moviesService.findAllMovies();
  }

  onGoToMovie(movie: IMovie) {
    this.router.navigate(['/movies', movie.id]);
  }
}
