import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.scss']
})
export class OpportunityComponent implements OnInit {

  constructor(
    private location:Location
    ) { }

  ngOnInit() {
  }

  back() {
    this.location.back();
  }

}
