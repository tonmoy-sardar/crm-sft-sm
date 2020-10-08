import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { LoadingState } from '../../../core/components/loading/loading.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-assign-lead-modal',
  templateUrl: './assign-lead-modal.component.html',
  styleUrls: ['./assign-lead-modal.component.scss']
})
export class AssignLeadModalComponent implements OnInit {

  form: FormGroup;
  loading: LoadingState = LoadingState.NotReady;

  constructor(
    public dialogRef: MatDialogRef<AssignLeadModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      team_member: [null, Validators.required]
    });
    this.loading = LoadingState.Ready;
  }

  close(flag){
    this.dialogRef.close(flag);
  }

  submit(){
    if (this.form.valid) {

    } else {
      this.markFormGroupTouched(this.form)
    }
  }

  clear(item:any){

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
