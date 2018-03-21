import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdateCalenderComponent } from './cdate-calender.component';

describe('CdateCalenderComponent', () => {
  let component: CdateCalenderComponent;
  let fixture: ComponentFixture<CdateCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdateCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdateCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
