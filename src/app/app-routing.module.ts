import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartOrchestratorComponent } from './components/cart-orchestrator/cart-orchestrator.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component'

const routes: Routes = [
  { path: '', redirectTo: '/maintenance', pathMatch: 'full' },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: ':id', component: CartOrchestratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
