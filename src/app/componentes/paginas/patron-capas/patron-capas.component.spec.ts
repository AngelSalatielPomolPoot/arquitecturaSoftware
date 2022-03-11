import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatronCapasComponent } from './patron-capas.component';

describe('PatronCapasComponent', () => {
  let component: PatronCapasComponent;
  let fixture: ComponentFixture<PatronCapasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatronCapasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatronCapasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
