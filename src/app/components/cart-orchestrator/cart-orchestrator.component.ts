import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-cart-orchestrator',
  templateUrl: './cart-orchestrator.component.html',
  styleUrls: ['./cart-orchestrator.component.scss']
})
export class CartOrchestratorComponent implements OnInit {
  public id:string = '';
  public showEmailSection:boolean = true;
  public showPaymentSection:boolean = false;
  public product:Product;
  
  constructor(
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
  }

  updateEmailSection(showEmail: boolean):void {
    this.showEmailSection = showEmail;
    this.showPaymentSection = true;
  }

  setProduct(product:Product) {
    this.product = product;
  }

}
