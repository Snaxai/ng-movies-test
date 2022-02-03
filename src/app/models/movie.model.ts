export interface IMovie {
  id: string;
  title: string;
  description: string;
  cover: string;
  rating: string;
  genre: string[];
  director: string;
  cast: string[];
  active: number;
}

/* export interface IMovieResponse {
  success: boolean;
  data: IMovie[];
}

export interface IMovieDetailResponse {
  success: boolean;
  data: IMovie;
} */