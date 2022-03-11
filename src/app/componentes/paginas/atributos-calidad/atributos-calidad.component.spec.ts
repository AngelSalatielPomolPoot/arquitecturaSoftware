import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributosCalidadComponent } from './atributos-calidad.component';

describe('AtributosCalidadComponent', () => {
  let component: AtributosCalidadComponent;
  let fixture: ComponentFixture<AtributosCalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtributosCalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtributosCalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
