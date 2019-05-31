import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    CommonModule,
    HttpClientModule,
    NgbAlertModule,
    FormsModule,
    FlexLayoutModule,
    NgbModule
  ]
})
export class SharedModule { }
