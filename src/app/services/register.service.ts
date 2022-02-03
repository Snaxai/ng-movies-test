import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { IMovieResponse } from '../models/reponse.model';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  private createHeaders() {
    return new HttpHeaders({
      'content-type': 'application/json',
      'x-api-key': 'someapikey',
    });
  }

  register(username: string, password: string): Observable<any> {
    const user = {
      user: { username, password },
    };
    const headers = this.createHeaders();
    return this.http
      .post<IMovieResponse<IUser>>(URL + '/users/register', user, {
        headers,
      })
      .pipe(
        map((response: IMovieResponse<IUser>) => {
          if (response.success === false) {
            throw new Error('response.error');
          }
          return response.success;
        }),
        catchError(error => {
          return throwError(error.error.error);
        })
      );
  }
}
