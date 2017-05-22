import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataEntryLayerComponent } from './data-entry-layer/data-entry-layer.component';
import { AnalysisLayerComponent } from './analysis-layer/analysis-layer.component';


@NgModule({
  declarations: [
    AppComponent,
    DataEntryLayerComponent,
    AnalysisLayerComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
