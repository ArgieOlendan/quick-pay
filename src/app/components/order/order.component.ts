import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  private _id: string;

  public product: Product;
  public total: number = 0;

  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _r: Router
  ) {

  }

  ngOnInit(): void {
    this._id = this._route.snapshot.paramMap.get('id');
    this.getProductById(this._id);
  }

  increaseQty(): void {
    this.product.qty += 1;
    this.calculateTotal();
  }

  decreaseQty(): void {
    if (this.product.qty > 0) {
      this.product.qty -= 1;
      this.calculateTotal();
    }
  }

  navigateToShippingPage() {
    this._r.navigate(['shipping/information']);
  }

  private calculateTotal() {
    this.total = this.product.price * this.product.qty;
  }

  private getProductById(id: string): void {
    this._productService
      .getItemById(this._id)
      .subscribe((res) => {
        this.product = res;
      });
  }
}
