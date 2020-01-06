import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSegmentsComponent } from './button-segments.component';

describe('ButtonSegmentsComponent', () => {
  let component: ButtonSegmentsComponent;
  let fixture: ComponentFixture<ButtonSegmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonSegmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSegmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
