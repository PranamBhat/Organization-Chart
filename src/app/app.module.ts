import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrgchartComponent } from './orgchart/orgchart.component';

@NgModule({
  declarations: [
    AppComponent,
    OrgchartComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, OrganizationChartModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }