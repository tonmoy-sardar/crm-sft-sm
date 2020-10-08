import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { LeadsRoutingModule } from './leads-routing.module';
import { LeadsComponent } from './leads.component';
import { AssignedLeadsComponent } from './assigned-leads/assigned-leads.component';
import { LeadPoolComponent } from './lead-pool/lead-pool.component';

@NgModule({
  declarations: [LeadsComponent, AssignedLeadsComponent, LeadPoolComponent],
  imports: [
    CommonModule,
    LeadsRoutingModule,
    CoreModule
  ]
})
export class LeadsModule { }
