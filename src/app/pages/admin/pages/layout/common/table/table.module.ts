import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { ForModule } from '../for';
import { AdminSharedModule } from 'src/app/pages/admin/common/admin-shared';
import { TableComponent } from './view/table.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    TableComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    AdminSharedModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatDialogModule,
    ForModule,
  ],
  exports: [
    ForModule,
    TableComponent,
    FilterComponent,
    MatDialogModule,
  ]
})
export class TableModule { }
