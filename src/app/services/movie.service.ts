import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieEntity } from '../models/entities/movie.entity';

@Injectable()
export class MovieService {
  constructor() { }


  public getAllMovies(): Array<MovieEntity> {
    const data = [new MovieEntity({
        asset: 'brooklyn',
        title: 'Brooklyn',
        subtitle: 'Not Queens',
        cover_path: 'brooklyn/cover/large_home.png',
        runtime: 115,
        genres: 'Romances',
        tags: ''
      }),
      new MovieEntity({
        asset: 'chappie',
        title: 'Chappie',
        subtitle: 'Not Chappie',
        cover_path: 'chappie/cover/large_home.png',
        runtime: 115,
        genres: 'Horror',
        tags: ''
      }),
      new MovieEntity({
        asset: 'ch22appie',
        title: 'Chappie',
        subtitle: 'Not Chappie',
        cover_path: 'chappie/cover/large_home.png',
        runtime: 115,
        genres: 'Horror',
        tags: ''
      }),
      new MovieEntity({
        asset: 'Full Movie',
        title: 'Chappie',
        subtitle: 'Not Chappie',
        cover_path: 'chappie/cover/large_home.png',
        runtime: 115,
        genres: 'Horror',
        tags: ''
      })];
    return data;
  }
}
