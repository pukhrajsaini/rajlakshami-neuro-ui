import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'igs-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() label = 'Filter';
  @Input() disabled = false;
  @Output() applyFilter: EventEmitter<void> = new EventEmitter();
  @Output() resetFilter: EventEmitter<void> = new EventEmitter();
  constructor(private dialogRef: MatDialogRef<any>) {}
  onCancelHandler() {
    this.dialogRef.close();
  }
}
