import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from './material.module';
import { CustomDatePipe } from '../shared/pipes/date.pipe';

@NgModule({
  declarations: [ CustomDatePipe ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    CustomDatePipe
  ],
})
export class SharedModule {}
