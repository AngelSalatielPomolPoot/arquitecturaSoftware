import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatronBrokerComponent } from './patron-broker.component';

describe('PatronBrokerComponent', () => {
  let component: PatronBrokerComponent;
  let fixture: ComponentFixture<PatronBrokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatronBrokerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatronBrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
