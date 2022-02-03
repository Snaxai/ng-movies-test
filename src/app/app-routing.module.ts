import { MovieDetailPage } from './pages/movie-detail/movie-detail.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginPage } from './pages/login/login.page';
import { MoviesPage } from './pages/movies/movies.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
    pathMatch: 'full',
  },
  {
    path: 'movies',
    component: MoviesPage,
    canActivate: [AuthGuard],
  },
  {
    path: 'movies/:movieId',
    component: MovieDetailPage,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
