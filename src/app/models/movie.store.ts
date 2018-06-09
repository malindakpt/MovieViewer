import {Injectable} from '@angular/core';
import {MovieService} from '../services/movie.service';
import {Observable, Subscriber} from 'rxjs';
import {CategoryEntiry} from './entities/category.entiry';
import {MovieEntity} from './entities/movie.entity';


@Injectable()
export class MovieStore {
  private _cateogriesArr: Array<CategoryEntiry> = [];
  private _cateogriesMap = {};

  constructor(
    private movieService: MovieService
  ) {

  }

  public getCategory(category: string) {
    if (!this._cateogriesMap[category]) {
      this._cateogriesMap[category] = [];
    }
    return this._cateogriesMap[category];
  }


  public get cateogries(): Array<CategoryEntiry> {
    if (this._cateogriesArr.length > 0) {
      return this._cateogriesArr;
    } else {
      this.movieService.getAllMovies().subscribe((data: Array<any>) => {
       this.generateCategoryModel(data);
      });
      return this._cateogriesArr;
    }
  }

  private generateCategoryModel(data: Array<any>): void {
    for (const obj of data) {
      const movie = new MovieEntity(obj);
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
