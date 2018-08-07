import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { StringReversalComponent } from './string-reversal/string-reversal.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    StringReversalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
