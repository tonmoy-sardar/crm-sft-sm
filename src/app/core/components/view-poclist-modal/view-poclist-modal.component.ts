import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoadingState } from '../../../core/components/loading/loading.component';

@Component({
  selector: 'app-view-poclist-modal',
  templateUrl: './view-poclist-modal.component.html',
  styleUrls: ['./view-poclist-modal.component.scss']
})
export class ViewPoclistModalComponent implements OnInit {

  loading: LoadingState = LoadingState.NotReady;

  constructor(
    public dialogRef: MatDialogRef<ViewPoclistModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.loading = LoadingState.Ready;
  }

  close(flag){
    this.dialogRef.close(flag);
  }

}
