import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcialidadComponent } from './parcialidad.component';

describe('ParcialidadComponent', () => {
  let component: ParcialidadComponent;
  let fixture: ComponentFixture<ParcialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcialidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
