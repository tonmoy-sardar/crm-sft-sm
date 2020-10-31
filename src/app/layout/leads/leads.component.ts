import { Component, OnInit, Output,EventEmitter, ViewChild } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {  
  @ViewChild('ctdTabset',{static: true}) ctdTabset;
  activeTab = 'assigned_leads';
  checkBox = false;

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

  ongetcheckbox(e){    
    this.checkBox = e;
  }
}
