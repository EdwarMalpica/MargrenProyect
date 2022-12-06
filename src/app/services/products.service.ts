import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/entities/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public api: string = "/products";

  constructor(private http: HttpClient) { }

  public addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.api, product);
  }

  public updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(this.api, product);
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }

  public getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(this.api + "?productId=" + productId);
  }

  public removeProduct(productId: number): Observable<boolean> {
    return this.http.delete<boolean>(this.api + "?productId=" + productId);
  }

}