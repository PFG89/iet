import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';
import { ButtonComponent } from './button.component';



@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    NgMaterialModule,
    
  ],
  exports:[ButtonComponent]
})
export class ButtonModule { }
