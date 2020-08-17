import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Product } from './product';
import { Observable } from 'rxjs';

import { from } from 'rxjs';
import { map, filter } from 'rxjs/operators';

//import * as data from 'assets/products.json';


@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  public getItems() : Observable<Product>{
     return this.http.get<Product>('assets/products.json');
  }

  public getItem(productId: string){

  //  var myJSON = JSON.stringify(data);
    //          console.log(myJSON);

    return null;
  }

}