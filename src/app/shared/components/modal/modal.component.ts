import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../../core/models/dialog-data.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dialogRef.keydownEvents().subscribe((event) => {
      if (event.key === 'Escape') {
        this.dialogRef.close();
      }else if(event.key === 'Enter'){
        this.dialogRef.close(data.result);
      }
    });
  }

  ngOnInit() {
    if (this.data.buttons) {
      this.data.buttons.forEach((button: any) => {
        if (button.label) button.type.label = button.label;
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
