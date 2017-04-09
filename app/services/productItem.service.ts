import {Injectable} from '@angular/core';

import {PRODUCTSLIST} from "../resources/productList.json";

@Injectable()
export class ProductService {
   getProducts() {
      return Promise.resolve(PRODUCTSLIST); 
   }
}