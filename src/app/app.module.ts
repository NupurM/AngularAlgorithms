import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { StringReversalComponent } from './string-reversal/string-reversal.component';
import { BinarySearchComponent } from './binary-search/binary-search.component';
import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    StringReversalComponent,
    BinarySearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
