import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { ZainoComponent } from './pages/zaino/zaino.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { CrudComponent } from './pages/crud/crud.component';
import { ButtonModule } from './components/button/button.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    ZainoComponent,
    FiltroComponent,
    CrudComponent,
    TableComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    NgMaterialModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
