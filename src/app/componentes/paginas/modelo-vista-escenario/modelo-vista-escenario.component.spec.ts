import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloVistaEscenarioComponent } from './modelo-vista-escenario.component';

describe('ModeloVistaEscenarioComponent', () => {
  let component: ModeloVistaEscenarioComponent;
  let fixture: ComponentFixture<ModeloVistaEscenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloVistaEscenarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloVistaEscenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
