import { Component,OnInit } from '@angular/core';
import {ProductService} from "../../services/productItem.service";
import {productItemsList} from '../../Models/item.model';
import { Router } from '@angular/router';
@Component({
  selector: 'mcart-product-list',
  templateUrl: 'app/components/productListComponent/productList.component.html',
  styleUrls:['app/components/productListComponent/productList.component.css'],
  providers: [ProductService]
})
export class productListComponent implements OnInit {
     constructor(private _productService: ProductService) {}
     public mobileList : productItemsList[];
    hideImages:boolean=false;
      getProducts(){
        this._productService.getProducts().then((productslistResponse: productItemsList[]) =>  this.mobileList = productslistResponse)
      }
   ngOnInit():any{
       this.getProducts();
  }

  hideImagesFunc(){
    this.hideImages=true;
  }
  showImagesFunc(){
    this.hideImages=false;
  }
 }
