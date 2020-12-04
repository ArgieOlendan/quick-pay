import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-orchestrator',
  templateUrl: './cart-orchestrator.component.html',
  styleUrls: ['./cart-orchestrator.component.scss']
})
export class CartOrchestratorComponent implements OnInit {
  public id:string = '';
  public showEmailSection:boolean = true;
  public showShippingSection:boolean = false;
  public showPaymentSection:boolean = false;
  
  constructor(
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
  }

}
