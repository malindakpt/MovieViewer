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

  constructor(private movieService: MovieService) { }

  // Returns category if exist, else create new and return
  public getCategory(category: string) {
    if (!this._cateogriesMap[category]) {
      this._cateogriesMap[category] = [];
    }
    return this._cateogriesMap[category];
  }

  // Returns movie if exists, else create new and return
  private getMovie(id: string) {
    if (!this._movieMap[id]) {
      this._movieMap[id] = {};
    }
    return this._movieMap[id];
  }

  // Return movie if exist, else request data and return
  public getMovieById(id: string): MovieEntity {
    if (!this._movieMap[id]) {
      this._movieMap[id] = this.getMovie(id);
        this.movieService.requestAllMovies().subscribe((data: Array<any>) => {
         this.generateMovieModel(data);
        });
    }
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

  public generateMovieModel(data: Array<any>): void {
    for (const obj of data) {
      const movie = new MovieEntity(obj);
      Object.assign(this.getMovie(movie.asset), movie);
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
