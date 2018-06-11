export class LicensingEntity {
  private _name: string;
  private _subscription: boolean;
  private _ad: boolean;
  private _transaction: boolean;
  // Assuming dates are send as strings from server
  private _valid_from: string;
  private _valid_till: string;

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get subscription(): boolean {
    return this._subscription;
  }

  public set subscription(value: boolean) {
    this._subscription = value;
  }

  public get ad(): boolean {
    return this._ad;
  }

  public set ad(value: boolean) {
    this._ad = value;
  }

  public get transaction(): boolean {
    return this._transaction;
  }

  public set transaction(value: boolean) {
    this._transaction = value;
  }

  public get valid_from(): string {
    return this._valid_from;
  }

  public set valid_from(value: string) {
    this._valid_from = value;
  }

  public get valid_till(): string {
    return this._valid_till;
  }

  public set valid_till(value: string) {
    this._valid_till = value;
  }
}
