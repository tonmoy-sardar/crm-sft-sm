import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddLeadComponent } from '../add-lead/add-lead.component';
import { AssignLeadModalComponent } from '../assign-lead-modal/assign-lead-modal.component';

@Component({
  selector: 'app-below-top-nav',
  templateUrl: './below-top-nav.component.html',
  styleUrls: ['./below-top-nav.component.scss']
})
export class BelowTopNavComponent implements OnInit {

  @Output() public emitLead = new EventEmitter<any>();
  @Output() public emitSearch = new EventEmitter<any>();
  @Output() public emitFilterData = new EventEmitter<any>();
  @Input() currentTab: string;

  search_key = ''
  selectedEmployee:any = 'all';
  constructor(public dialog: MatDialog,) { }

  ngOnInit() {
    
  }

  ngOnChanges(){
    // console.log(this.currentTab)
  }

  assignLead(){
    let dialogRef = this.dialog.open(AssignLeadModalComponent, {
      backdropClass: 'popupBackdropClass',
      width: '525px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
      }
    })

  }

  addLead(){
    let dialogRef = this.dialog.open(AddLeadComponent, {
      width: '525px',
      height: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      
      if(result == true){
        this.emitLead.emit(result)
      }
    })
  }

  submit(){
    this.emitSearch.emit(this.search_key)
  }

  filterLead(event){
    this.emitFilterData.emit(event)
  }
}
