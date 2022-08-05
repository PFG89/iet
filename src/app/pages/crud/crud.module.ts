import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'src/app/components/button/button.module';
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudRoutingModule } from './crud-routing.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    NgMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CrudRoutingModule,
    
  ]
})
export class CrudModule { }
