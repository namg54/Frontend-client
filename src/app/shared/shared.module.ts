import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { CardShopComponent } from './Components/card-shop/card-shop.component';



@NgModule({
  declarations: [
    CardShopComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
  CardShopComponent
  ]
})
export class SharedModule { }
