import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BinarySearchComponent } from '../binary-search/binary-search.component';
import { CounterComponent } from '../counter/counter.component';
import { HomeComponent } from './home.component';
import { StringReversalComponent } from '../string-reversal/string-reversal.component';

import { ApiService } from '../api.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent,
        BinarySearchComponent,
        CounterComponent,
        StringReversalComponent],
      providers: [ApiService],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
