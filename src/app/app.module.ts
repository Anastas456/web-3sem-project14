import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableWorkersComponent } from './ui/table-workers/table-workers.component';
import { AddWorkerComponent } from './ui/add-worker/add-worker.component';
import { EditWorkerComponent } from './ui/edit-worker/edit-worker.component';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    AppComponent,
    TableWorkersComponent,
    AddWorkerComponent,
    EditWorkerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TextMaskModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
