import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GradientButtonComponent } from 'src/app/components/gradient-button/gradient-button.component';

@NgModule({
  declarations: [
    HomeComponent,
    GradientButtonComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule
  ],
  exports: [ HomeComponent ]
})
export class HomeModule { }
