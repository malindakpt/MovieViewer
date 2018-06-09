import {MovieEntity} from './movie.entity';

export class CategoryEntiry {
  private _name: string;
  private _movies: Array<MovieEntity>;

  constructor(obj: any) {
    Object.assign(this, obj);
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get movies(): Array<MovieEntity> {
    return this._movies;
  }

  public set movies(value: Array<MovieEntity>) {
    this._movies = value;
  }
}
