import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowimageComponent } from './showimage/showimage.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ShowimageComponent],
  exports:[ShowimageComponent]
})
export class SharedModule {}
