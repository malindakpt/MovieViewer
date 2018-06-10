import {Injectable} from '@angular/core';
import {MovieService} from '../services/movie.service';
import {CategoryEntiry} from './entities/category.entiry';
import {MovieEntity} from './entities/movie.entity';
import {MovieDetailEntity} from './entities/movie-detail.entity';


@Injectable()
export class MovieStore {
  private _cateogriesArr: Array<CategoryEntiry> = [];
  private _cateogriesMap = {};
  private _movieDetailMap = {};
  private _movieMap = {};

  constructor(
    private movieService: MovieService
  ) { }

  public getCategory(category: string) {
    if (!this._cateogriesMap[category]) {
      this._cateogriesMap[category] = [];
    }
    return this._cateogriesMap[category];
  }

  public getMovies(category: string): Array<MovieEntity> {
    return this._cateogriesMap[category];
  }

  public getMovieById(id: string): MovieEntity {
    return this._movieMap[id];
  }

  public getMovieDetail(id: string): MovieDetailEntity {
    if (!this._movieDetailMap[id]) {
      this._movieDetailMap[id] = new MovieDetailEntity();
      this.movieService.requestMovieDetail(id).subscribe(data => {
        Object.assign(this._movieDetailMap[id], data);
      });
    }
    return this._movieDetailMap[id];
  }

  public get cateogries(): Array<CategoryEntiry> {
    // if (this._cateogriesArr.length > 0) {
      return this._cateogriesArr;
    // } else {
    //   // this.movieService.requestAllMovies().subscribe((data: Array<any>) => {
    //   //  this.generateCategoryModel(data);
    //   // });
    //   return this._cateogriesArr;
    // }
  }

  public generateCategoryModel(data: Array<any>): void {
    for (const obj of data) {
      const movie = new MovieEntity(obj);
      this._movieMap[movie.asset] = movie;
      this.getCategory(movie.genres).push(movie);
    }

    for (const cat in this._cateogriesMap) {
      if (this._cateogriesMap.hasOwnProperty(cat)) {
        this._cateogriesArr.push(new CategoryEntiry({
          name: cat,
          movies: this._cateogriesMap[cat]
        }));
      }
    }
  }
}
