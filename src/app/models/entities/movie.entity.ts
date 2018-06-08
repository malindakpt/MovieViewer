export class MovieEntity {
  private _asset: string;
  private _title: string;
  private _subtitle: string;
  private _cover_path: string;
  private _runtime: number;
  private _genres: string;
  private _tags: string;

  constructor(obj: any) {
    Object.assign(this, obj);
  }
  get asset(): string {
    return this._asset;
  }

  set asset(value: string) {
    this._asset = value;
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

  get cover_path(): string {
    return this._cover_path;
  }

  set cover_path(value: string) {
    this._cover_path = value;
  }

  get runtime(): number {
    return this._runtime;
  }

  set runtime(value: number) {
    this._runtime = value;
  }

  get genres(): string {
    return this._genres;
  }

  set genres(value: string) {
    this._genres = value;
  }

  get tags(): string {
    return this._tags;
  }

  set tags(value: string) {
    this._tags = value;
  }
}
