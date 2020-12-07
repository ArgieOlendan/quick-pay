import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseURL = 'https://quick-pay-server.herokuapp.com/api/items/';

  constructor(private _http: HttpClient) {}

  getItemById(id): any {
    return this._http.get(this.baseURL + `${id}`);
  }
}
