import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductTableComponent } from './components/product-table/product-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ProductTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
