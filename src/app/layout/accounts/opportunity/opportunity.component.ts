import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.scss']
})
export class OpportunityComponent implements OnInit {

  constructor(
    private location:Location,
    private router: Router
    ) { }

  ngOnInit() {
  }

  openSettings(){
    this.router.navigateByUrl('/settings');
  }


}
