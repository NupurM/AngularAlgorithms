import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement, Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

@Component({
  selector: 'app-header',
  template: ''
})
class HeaderStubComponent { }

@Component({
  selector: 'app-footer',
  template: ''
})
class FooterStubComponent { }

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderStubComponent,
        FooterStubComponent],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));
});
