import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { IProduct } from '../shared/Models/Product';
import { IPagination } from '../shared/Models/pagination';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
private backendurl=environment.bakendUrl;

  constructor(private http:HttpClient) { }

  getProducts(): Observable<IPagination<IProduct>> {
    return this.http.get<IPagination<IProduct>>(this.backendurl+'/Products');
  }

}
