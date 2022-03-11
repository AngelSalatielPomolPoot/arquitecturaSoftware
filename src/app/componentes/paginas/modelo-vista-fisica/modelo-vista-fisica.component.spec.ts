import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloVistaFisicaComponent } from './modelo-vista-fisica.component';

describe('ModeloVistaFisicaComponent', () => {
  let component: ModeloVistaFisicaComponent;
  let fixture: ComponentFixture<ModeloVistaFisicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloVistaFisicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloVistaFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
