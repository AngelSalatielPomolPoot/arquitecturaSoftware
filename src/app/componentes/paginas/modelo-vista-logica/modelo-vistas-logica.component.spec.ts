import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloVistasLogicaComponent } from './modelo-vistas-logica.component';

describe('ModeloVistasLogicaComponent', () => {
  let component: ModeloVistasLogicaComponent;
  let fixture: ComponentFixture<ModeloVistasLogicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloVistasLogicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloVistasLogicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
