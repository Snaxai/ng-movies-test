import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.css'],
})
export class MovieDetailPage implements OnInit {

  constructor(private route: ActivatedRoute) {
    const movieId: string = this.route.snapshot.paramMap.get("movieId") ?? ""
  }


  ngOnInit(): void {}
}
