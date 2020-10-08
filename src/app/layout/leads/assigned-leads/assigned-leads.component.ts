import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddTaskModalComponent } from '../../../core/components/add-task-modal/add-task-modal.component';
import { AddOpportunityModalComponent } from '../../../core/components/add-opportunity-modal/add-opportunity-modal.component';
import { ShowTaskModalComponent } from '../../../core/components/show-task-modal/show-task-modal.component';

@Component({
  selector: 'app-assigned-leads',
  templateUrl: './assigned-leads.component.html',
  styleUrls: ['./assigned-leads.component.scss']
})
export class AssignedLeadsComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  addTask(){
    let dialogRef = this.dialog.open(AddTaskModalComponent, {
      backdropClass: 'popupBackdropClass',
      width: '525px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
      }
    })

  }

  addOpportunity(){
    let dialogRef = this.dialog.open(AddOpportunityModalComponent, {
      width: '625px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
      }
    })
  }

  showTask(){
    let dialogRef = this.dialog.open(ShowTaskModalComponent, {
      backdropClass: 'popupBackdropClass',
      width: '380px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
      }
    })
  }

}
