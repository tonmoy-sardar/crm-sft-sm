import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  navList: any = [];

  constructor(
    private router:Router
  ) {
    
   }

  ngOnInit() {
    this.navList = [
      {
        link: 'leads',
        title: 'Leads',
        icon: 'fa fa-leanpub',
        selected: false
      },
      {
        link: 'pipeline',
        title: 'Pipeline',
        icon: 'fa fa-trophy',
        selected: false
      },
      {
        link: 'accounts',
        title: 'Accounts',
        icon: 'fa fa-money',
        selected: false
      },
      {
        link: 'close_won',
        title: 'Close Won',
        icon: 'fa fa-pie-chart',
        selected: false
      },
      {
        link: 'loss_analysis',
        title: 'Loss Analysis',
        icon: 'fa fa-line-chart',
        selected: false
      }
    ];
    this.selectNav()
  }

  selectNav(){    
    var nav = this.router.url.substr(1)    
    this.navList.forEach(element => {
      if(element.link == nav) element.selected = true;
      else element.selected = false;
    });
  }

  goto(item){
    this.router.navigateByUrl('/'+item.link);
    setTimeout(() => {this.selectNav()}, 250); 
  }

}
