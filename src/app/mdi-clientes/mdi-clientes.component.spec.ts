import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdiClientesComponent } from './mdi-clientes.component';

describe('MdiClientesComponent', () => {
  let component: MdiClientesComponent;
  let fixture: ComponentFixture<MdiClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdiClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdiClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
