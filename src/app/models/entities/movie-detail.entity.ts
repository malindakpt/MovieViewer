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


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get subtitle(): string {
    return this._subtitle;
  }

  set subtitle(value: string) {
    this._subtitle = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get genres(): string {
    return this._genres;
  }

  set genres(value: string) {
    this._genres = value;
  }

  get cast(): string {
    return this._cast;
  }

  set cast(value: string) {
    this._cast = value;
  }

  get directors(): string {
    return this._directors;
  }

  set directors(value: string) {
    this._directors = value;
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get runtime(): number {
    return this._runtime;
  }

  set runtime(value: number) {
    this._runtime = value;
  }

  get age_rating(): string {
    return this._age_rating;
  }

  set age_rating(value: string) {
    this._age_rating = value;
  }

  get tags(): string {
    return this._tags;
  }

  set tags(value: string) {
    this._tags = value;
  }

  get streams(): Array<StreamEntity> {
    return this._streams;
  }

  set streams(value: Array<StreamEntity>) {
    this._streams = value;
  }

  get licensing(): LicensingEntity {
    return this._licensing;
  }

  set licensing(value: LicensingEntity) {
    this._licensing = value;
  }
}
