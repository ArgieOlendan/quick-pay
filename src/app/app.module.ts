import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './components/order/order.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { CartOrchestratorComponent } from './components/cart-orchestrator/cart-orchestrator.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProgressBarComponent } from './components/shared/progress-bar/progress-bar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    MaintenanceComponent,
    CartOrchestratorComponent,
    PaymentComponent,
    ProgressBarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
