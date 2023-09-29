import { Component, HostListener, Input } from '@angular/core';
import { IProduct } from '../../Models/Product';

@Component({
  selector: 'app-card-shop',
  templateUrl: './card-shop.component.html',
  styleUrls: ['./card-shop.component.scss']
})
export class CardShopComponent {
  @Input() product: IProduct;
  mobileSize: boolean = false;
  @HostListener("window:resize", []) updateSize() {
    // lg (for laptops and desktops - screens equal to or greater than 1200px wide)
    // md (for small laptops - screens equal to or greater than 992px wide)
    // sm (for tablets - screens equal to or greater than 768px wide)
    // xs (for phones - screens less than 768px wide)
      if (window.innerWidth <= 768) {
        this.mobileSize=true;
       }
        else  {
      this.mobileSize = false;
    }
  }
  constructor() {
    this.SizeCheck();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  private SizeCheck(){
    if (window.screen.width <= 768) {
      this.mobileSize = true;
    }else{
      this.mobileSize=false;
    }
  }
}
