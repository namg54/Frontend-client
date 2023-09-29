import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { IPagination } from './shared/Models/pagination';
import { IProduct } from './shared/Models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent   {
  private bakendUrl=environment.bakendUrl;
  constructor(private http:HttpClient){}
  ngOnInit(): void {
   
  }
  title = 'Shopping_Web';
}
