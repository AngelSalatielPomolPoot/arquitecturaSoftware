import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloVistaDesarrolloComponent } from './modelo-vista-desarrollo.component';

describe('ModeloVistaDesarrolloComponent', () => {
  let component: ModeloVistaDesarrolloComponent;
  let fixture: ComponentFixture<ModeloVistaDesarrolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloVistaDesarrolloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloVistaDesarrolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
