import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { LoadingState } from '../../../core/components/loading/loading.component';
import { ToastrService } from 'ngx-toastr';
import { AddPocModalComponent } from '../../../core/components/add-poc-modal/add-poc-modal.component';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-add-opportunity-modal',
  templateUrl: './add-opportunity-modal.component.html',
  styleUrls: ['./add-opportunity-modal.component.scss']
})
export class AddOpportunityModalComponent implements OnInit {

  form: FormGroup;
  pocList = [
    {name: "Test", email: "test@test.com", phone: "2585626660", job: "Test", primary: 1 },
    {name: "Test1", email: "1test@test.com", phone: "111111111", job: "1Test", primary: 0},
  ];
  loading: LoadingState = LoadingState.NotReady;

  constructor(
    public dialogRef: MatDialogRef<AddOpportunityModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      business_name: [null, Validators.required],
      cin: [null],
      pan: [null],
      gstin: [null],
      opportunity:  [null, Validators.required],
      opportunity_date: [null, Validators.required],
      closure_date: [null, Validators.required],
      engagement: [null],
      department: [null, Validators.required],
      technology: [null],
      business_url: [null],
      man_hours: [null],
      value: [null, Validators.required],
      currency: [null, Validators.required],
    });
    this.loading = LoadingState.Ready;
  }


  formatHandler( event){

  }

  close(flag){
    this.dialogRef.close(flag)
  }

  submit() {
    
  }

  addPOC() {
    let dialogRef = this.dialog.open(AddPocModalComponent, {
      backdropClass: 'popupBackdropClass',
      width: '525px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
      }
    })
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data)
    ev.target.appendChild(document.getElementById(data));
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control.controls) {
        control.controls.forEach(c => this.markFormGroupTouched(c));
      }
    });
  }

  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && (form.get(field).dirty || form.get(field).touched);
  }

  displayFieldCss(form: FormGroup, field: string) {
    return {
      'is-invalid': form.get(field).invalid && (form.get(field).dirty || form.get(field).touched),
      'is-valid': form.get(field).valid && (form.get(field).dirty || form.get(field).touched)
    };
  }
}
