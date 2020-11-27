import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  private _id:string;

  public product:Product;
  
  productName:string;
  productPrice:number;
  productCompanyName:string;
  productQty:number;

  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute
  ) {
    
  }

  ngOnInit(): void {
    this._id = this._route.snapshot.paramMap.get('itemId');
    this.getProductById(this._id)
  }

  increaseQty(): void {
    this.product.qty +=1;
  }

  decreaseQty(): void {
    if (this.product.qty > 0) {
      this.product.qty -=1;
    }
  }

  private getProductById(id:string):void {
    this._productService
      .getItemById(this._id)
      .subscribe((res) => {
        this.product = res;
        console.log(this.product);
      });
  }
}
