import {Injectable} from '@angular/core';


@Injectable()
export class MovieStore {
  private _cateogries = {};

  public getCategory(category: string) {
    if (!this._cateogries[category]) {
      this._cateogries[category] = [];
    }
    return this._cateogries[category];
  }


  get cateogries(): {} {
    return this._cateogries;
  }
}
