import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { LeadReportComponent } from './lead-report/lead-report.component';
import { InvoiceReportComponent } from './invoice-report/invoice-report.component';
import { CustomerReportComponent } from './customer-report/customer-report.component';
import { ProjectReportComponent } from './project-report/project-report.component';


@NgModule({
  declarations: [ReportComponent, LeadReportComponent, InvoiceReportComponent, CustomerReportComponent, ProjectReportComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    CoreModule
  ]
})
export class ReportModule { }
