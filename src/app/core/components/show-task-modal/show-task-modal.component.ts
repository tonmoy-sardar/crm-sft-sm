import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { LoadingState } from '../../../core/components/loading/loading.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-show-task-modal',
  templateUrl: './show-task-modal.component.html',
  styleUrls: ['./show-task-modal.component.scss']
})
export class ShowTaskModalComponent implements OnInit {
  showForm:boolean = false
  form: FormGroup;
  loading: LoadingState = LoadingState.NotReady;

  constructor(
    public dialogRef: MatDialogRef<ShowTaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
  ) { }


  ngOnInit() {
    this.form = this.formBuilder.group({
      date: [null, Validators.required],
      time: [null, Validators.required],
    });
    this.loading = LoadingState.Ready;
  }

  reschedule(){
    this.showForm = true
  }

  closeform(){
    this.showForm = false
  }

  formatHandler( event){

  }

  close(key: boolean) {
    this.dialogRef.close(key);
  }

  submit() {
    
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
