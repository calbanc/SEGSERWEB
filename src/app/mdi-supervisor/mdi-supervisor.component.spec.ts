import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdiSupervisorComponent } from './mdi-supervisor.component';

describe('MdiSupervisorComponent', () => {
  let component: MdiSupervisorComponent;
  let fixture: ComponentFixture<MdiSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdiSupervisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdiSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
