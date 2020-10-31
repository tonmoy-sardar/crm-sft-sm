import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddTaskModalComponent } from '../../../core/components/add-task-modal/add-task-modal.component';
import { AddOpportunityModalComponent } from '../../../core/components/add-opportunity-modal/add-opportunity-modal.component';
import { ShowTaskModalComponent } from '../../../core/components/show-task-modal/show-task-modal.component';
import { AssignLeadModalComponent } from '../../../core/components/assign-lead-modal/assign-lead-modal.component';
@Component({
  selector: 'app-lead-pool',
  templateUrl: './lead-pool.component.html',
  styleUrls: ['./lead-pool.component.scss']
})
export class LeadPoolComponent implements OnInit {
  @Output() checkedBox = new EventEmitter<boolean>();

  checkedLeave:any = [];
  checked = false;
  checkedRow:any = [];
  isCheckedRow:boolean;
  leadList: any = [];
  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.leadList = [
      {
        "business_name":"KGDF Bank",
        "first_name":"John",
        "last_name":"Doe",
        "country":"USA",
        "contact_number":"2314784209",
        "email_id":"john@gmail.com",
        "source":"Facebook",
        "checked":false
      },
      {
        "business_name":"KGDF Bank",
        "first_name":"John",
        "last_name":"Doe",
        "country":"USA",
        "contact_number":"2314784209",
        "email_id":"john@gmail.com",
        "source":"Facebook",
        "checked":false
      },
      {
        "business_name":"KGDF Bank",
        "first_name":"John",
        "last_name":"Doe",
        "country":"USA",
        "contact_number":"2314784209",
        "email_id":"john@gmail.com",
        "source":"Facebook",
        "checked":false
      },
      {
        "business_name":"KGDF Bank",
        "first_name":"John",
        "last_name":"Doe",
        "country":"USA",
        "contact_number":"2314784209",
        "email_id":"john@gmail.com",
        "source":"Facebook",
        "checked":false
      },
      {
        "business_name":"KGDF Bank",
        "first_name":"John",
        "last_name":"Doe",
        "country":"USA",
        "contact_number":"2314784209",
        "email_id":"john@gmail.com",
        "source":"Facebook",
        "checked":false
      },
      {
        "business_name":"KGDF Bank",
        "first_name":"John",
        "last_name":"Doe",
        "country":"USA",
        "contact_number":"2314784209",
        "email_id":"john@gmail.com",
        "source":"Facebook",
        "checked":false
      },
      {
        "business_name":"KGDF Bank",
        "first_name":"John",
        "last_name":"Doe",
        "country":"USA",
        "contact_number":"2314784209",
        "email_id":"john@gmail.com",
        "source":"Facebook",
        "checked":false
      },
      {
        "business_name":"KGDF Bank",
        "first_name":"John",
        "last_name":"Doe",
        "country":"USA",
        "contact_number":"2314784209",
        "email_id":"john@gmail.com",
        "source":"Facebook",
        "checked":false
      }
    ]
    this.leadList.forEach((x,index)=>{
      this.checkedRow[index] = {'id':x.id,'checked':false};
    })
    
  }

  checkedAll(event){    
    this.leadList.forEach((x,index)=>{
      this.checkedRow[index] = {'id':x.id,'checked':event.checked};
    })
    this.isCheckedRow = event.checked;  
    console.log('all')   
    this.checkedBox.emit(event.checked); 
  }

  checkedThisRow(index,event){
    let ctr = 0;
    this.checkedRow.forEach((x,index)=>{
      if(ctr<1){
        if(x.checked == true){
          this.isCheckedRow = true;
          // this.checkedBox.emit(true); 
          ctr++;
        }else{
          this.isCheckedRow = false;
          this.checked = false;
        }
      }
    })
    if(this.isCheckedRow == true){      
      
    }   
    this.checkAllReverse();
  }

  checkAllReverse() {
    this.checked = true;
    var checkboxemittionflag = false;
    this.checkedRow.forEach((x,i) => {
      if (x.checked==false) {
        this.checked = false;
        // checkboxemittionflag = false;
      } else {
        checkboxemittionflag = true;
      }

      if((this.checkedRow.length-1) == i){
        // console.log(checkboxemittionflag)
        // console.log('single') 
        this.checkedBox.emit(checkboxemittionflag) 
      }
        // 
    })    
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

  check(e) {
    
  }

  // addTask(){
  //   let dialogRef = this.dialog.open(AddTaskModalComponent, {
  //     backdropClass: 'popupBackdropClass',
  //     width: '525px'
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     if(result == true){
  //     }
  //   })

  // }

  // addOpportunity(){
  //   let dialogRef = this.dialog.open(AddOpportunityModalComponent, {
  //     width: '625px',
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     if(result == true){
  //     }
  //   })
  // }

  // showTask(){
  //   let dialogRef = this.dialog.open(ShowTaskModalComponent, {
  //     backdropClass: 'popupBackdropClass',
  //     width: '380px',
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     if(result == true){
  //     }
  //   })
  // }

}
