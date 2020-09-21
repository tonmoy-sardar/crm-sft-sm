import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'leads', pathMatch: 'full' },
      { path: '/', redirectTo: 'leads', pathMatch: 'full' },
      { path: 'leads',  loadChildren: () => import('./leads/leads.module').then(m => m.LeadsModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
