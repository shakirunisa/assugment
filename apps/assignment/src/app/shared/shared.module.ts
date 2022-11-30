import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HellosampleComponent } from './hellosample/hellosample.component';

@NgModule({
  declarations: [HellosampleComponent],
  imports: [CommonModule],
  exports:[HellosampleComponent]
})
export class SharedModuleSample {}
