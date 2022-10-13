import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoscontrolComponent } from './puntoscontrol.component';

describe('PuntoscontrolComponent', () => {
  let component: PuntoscontrolComponent;
  let fixture: ComponentFixture<PuntoscontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntoscontrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoscontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
