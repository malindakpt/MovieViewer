export class LicensingEntity {
  private _name: string;
  private _subscription: boolean;
  private _ad: boolean;
  private _transaction: boolean;
  // Assuming dates are send as strings from server
  private _valid_from: string;
  private _valid_till: string;


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get subscription(): boolean {
    return this._subscription;
  }

  set subscription(value: boolean) {
    this._subscription = value;
  }

  get ad(): boolean {
    return this._ad;
  }

  set ad(value: boolean) {
    this._ad = value;
  }

  get transaction(): boolean {
    return this._transaction;
  }

  set transaction(value: boolean) {
    this._transaction = value;
  }

  get valid_from(): string {
    return this._valid_from;
  }

  set valid_from(value: string) {
    this._valid_from = value;
  }

  get valid_till(): string {
    return this._valid_till;
  }

  set valid_till(value: string) {
    this._valid_till = value;
  }
}
