import {StreamEntity} from './stream.entity';
import {LicensingEntity} from './licensing.entity';

export class MovieDetailEntity {
  private _id: string;
  private _title: string;
  private _subtitle: string;
  private _description: string;
  private _genres: string;
  private _cast: string;
  private _directors: string;
  private _year: number;
  private _country: string;
  private _runtime: number;
  private _age_rating: string;
  private _tags: string;
  private _streams: Array<StreamEntity>;
  private _licensing: LicensingEntity;


  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

  public get subtitle(): string {
    return this._subtitle;
  }

  public set subtitle(value: string) {
    this._subtitle = value;
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }

  public get genres(): string {
    return this._genres;
  }

  public set genres(value: string) {
    this._genres = value;
  }

  public get cast(): string {
    return this._cast;
  }

  public set cast(value: string) {
    this._cast = value;
  }

  public get directors(): string {
    return this._directors;
  }

  public set directors(value: string) {
    this._directors = value;
  }

  public get year(): number {
    return this._year;
  }

  public set year(value: number) {
    this._year = value;
  }

  public get country(): string {
    return this._country;
  }

  public set country(value: string) {
    this._country = value;
  }

  public get runtime(): number {
    return this._runtime;
  }

  public set runtime(value: number) {
    this._runtime = value;
  }

  public get age_rating(): string {
    return this._age_rating;
  }

  public set age_rating(value: string) {
    this._age_rating = value;
  }

  public get tags(): string {
    return this._tags;
  }

  public set tags(value: string) {
    this._tags = value;
  }

  public get streams(): Array<StreamEntity> {
    return this._streams;
  }

  public set streams(value: Array<StreamEntity>) {
    this._streams = value;
  }

  public get licensing(): LicensingEntity {
    return this._licensing;
  }

  public set licensing(value: LicensingEntity) {
    this._licensing = value;
  }
}
