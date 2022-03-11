import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatronTuberiaComponent } from './patron-tuberia.component';

describe('PatronTuberiaComponent', () => {
  let component: PatronTuberiaComponent;
  let fixture: ComponentFixture<PatronTuberiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatronTuberiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatronTuberiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
