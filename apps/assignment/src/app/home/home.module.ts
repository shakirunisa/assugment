import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModuleSample } from '../shared/shared.module';
//import { HellosampleComponent } from '../shared/hellosample/hellosample.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule,SharedModuleSample],
  exports:[HomeComponent]
})
export class HomeModule {}
