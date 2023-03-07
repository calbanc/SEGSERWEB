import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarondaComponent } from './generaronda.component';

describe('GenerarondaComponent', () => {
  let component: GenerarondaComponent;
  let fixture: ComponentFixture<GenerarondaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarondaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarondaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
