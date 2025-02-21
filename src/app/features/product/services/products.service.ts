import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  getProducts(): Observable<any> {
    return this.http.get(environments.baseUrl + 'products');
  }
  getProductById(id: string): Observable<any> {
    return this.http.get(environments.baseUrl + `products/${id}`);
  }
  
}
