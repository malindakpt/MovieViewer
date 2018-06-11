import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

  public requestAllMovies(): Observable<Object> {
    return this.http.get(environment.hostURL + '_catalog.json');
  }

  public requestMovieDetail(id: string): Observable<Object> {
    return this.http.get(environment.hostURL + id + '/metadata.json');
  }

}
