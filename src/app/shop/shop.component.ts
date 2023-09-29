import { Component } from '@angular/core';
import { ShopService } from './shop.service';
import { Subscription } from 'rxjs';
import { IProduct } from '../shared/Models/Product';
import { IPagination } from '../shared/Models/pagination';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  public data: IPagination<IProduct>;
  private sub$ = new Subscription();
  constructor(private shopService: ShopService) {}
  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
  ngOnInit(): void {
    this.GetProducts();
  }

  private GetProducts() {
    this.shopService.getProducts().subscribe((res) => {
      this.data = res;
    });
    this.sub$.add(this.sub$);
  }
}
