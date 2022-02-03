export interface IMovieResponse<T> {
  data: T;
  success: boolean;
  error?: string;
}
