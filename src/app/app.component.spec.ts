import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AppComponent } from './app.component';
import { BinarySearchComponent } from './binary-search/binary-search.component';
import { CounterComponent } from './counter/counter.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { StringReversalComponent } from './string-reversal/string-reversal.component';

import { ApiService } from './api.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BinarySearchComponent,
        CounterComponent,
        FooterComponent,
        HeaderComponent,
        HomeComponent,
        StringReversalComponent,
      ],
      providers: [ApiService],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  xit(`should have as title 'Angular Algorithms'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular Algorithms');
  }));
  xit('should render title in an h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Angular Algorithms');
  }));
});
