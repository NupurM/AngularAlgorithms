import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BinarySearchComponent } from './binary-search.component';
import { ApiService } from '../api.service';

describe('BinarySearchComponent', () => {
  let component: BinarySearchComponent;
  let fixture: ComponentFixture<BinarySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BinarySearchComponent],
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinarySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
