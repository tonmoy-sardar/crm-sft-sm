import { Component, OnInit, Output,EventEmitter, ViewChild } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  @ViewChild('ctdTabset',{static: true}) ctdTabset;
  activeTab = 'lead_report';

  search_key='';

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.switchNgBTab(this.activeTab);
  }

  switchNgBTab(id: string) {
    this.ctdTabset.select(id);
  }

  onTabChange($event: NgbTabChangeEvent) {
    this.activeTab = $event.nextId;
    
  }

  submit() {
    
  }

}
