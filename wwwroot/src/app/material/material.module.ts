import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';


const materialModule = [
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatDividerModule,
  MatBadgeModule,
  MatGridListModule
];

@NgModule({
  imports: [materialModule],
  exports: [materialModule]
})
export class MaterialModule { }
