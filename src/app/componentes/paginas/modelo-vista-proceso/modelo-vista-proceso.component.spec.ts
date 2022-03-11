import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloVistaProcesoComponent } from './modelo-vista-proceso.component';

describe('ModeloVistaProcesoComponent', () => {
  let component: ModeloVistaProcesoComponent;
  let fixture: ComponentFixture<ModeloVistaProcesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloVistaProcesoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloVistaProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
