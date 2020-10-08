import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { LoadingState } from '../../../core/components/loading/loading.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-lead',
  templateUrl: './add-lead.component.html',
  styleUrls: ['./add-lead.component.scss']
})
export class AddLeadComponent implements OnInit {


  form: FormGroup;
  loading: LoadingState = LoadingState.NotReady;

  constructor(
    public dialogRef: MatDialogRef<AddLeadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      business_name: [null, Validators.required],
      url: [null],
      cin: [null],
      pan: [null],
      gstin: [null],
      first_name:  [null, Validators.required],
      last_name:  [null],
      country: [null, Validators.required],
      phone: [null, Validators.required],
      mobile: [null],
      email: [null, [Validators.required,,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/)]],
      job_title: [null],
      source: [null, Validators.required],
      remarks: [null],
    });
    this.loading = LoadingState.Ready;
  }

  formSubmit(){
    if (this.form.valid) {

    } else {
      this.markFormGroupTouched(this.form)
    }
  }

  close(flag){
    this.dialogRef.close(flag);
  }

  formatHandler( event){

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
