import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {MovieService} from '../services/movie.service';
import {MovieStore} from '../models/movie.store';

@Injectable()
export class AppResolver implements Resolve<any> {

  constructor(
    private movieService: MovieService,
    private movieStore: MovieStore,
  ) { }

  // Request allMovie data befor route to any route
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    this.movieService.requestAllMovies().subscribe((data: Array<any>) => {
      this.movieStore.generateMovieModel(data);
    });
  }
}
