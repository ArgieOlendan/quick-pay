import { Route } from '@angular/compiler/src/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  @Input() id: string;
  @Input() showEmailSection:boolean;

  @Output() showEmail = new EventEmitter<boolean>();
  @Output() productObj = new EventEmitter<Product>();

  public product: Product;
  public total: number = 0;

  constructor(
    private _productService: ProductService
  ) {

  }

  ngOnInit(): void {
    console.log(this.id)
    this.getProductById(this.id);
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

  updateSection(): void {
    this.showEmailSection = false;
    this.showEmail.emit(this.showEmailSection);
    this.setProduct(this.product);
  }

  setProduct(product:Product):void {
    this.productObj.emit(product);
  }

  private calculateTotal() {
    this.total = this.product.price * this.product.qty;
  }

  private getProductById(id: string): void {
    this._productService
      .getItemById(this.id)
      .subscribe((res) => {
        this.product = res;
      });
  }
}
