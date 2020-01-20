import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailFilterComponent } from './mail-filter.component';

describe('MailFilterComponent', () => {
  let component: MailFilterComponent;
  let fixture: ComponentFixture<MailFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
