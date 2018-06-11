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

  public get asset(): string {
    return this._asset;
  }

  public set asset(value: string) {
    this._asset = value;
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

  public get cover_path(): string {
    return this._cover_path;
  }

  public set cover_path(value: string) {
    this._cover_path = value;
  }

  public get runtime(): number {
    return this._runtime;
  }

  public set runtime(value: number) {
    this._runtime = value;
  }

  public get genres(): string {
    return this._genres;
  }

  public set genres(value: string) {
    this._genres = value;
  }

  public get tags(): string {
    return this._tags;
  }

  public set tags(value: string) {
    this._tags = value;
  }
}
