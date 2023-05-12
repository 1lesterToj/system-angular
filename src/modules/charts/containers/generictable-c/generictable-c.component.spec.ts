import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerictableCComponent } from './generictable-c.component';

describe('GenerictableCComponent', () => {
  let component: GenerictableCComponent;
  let fixture: ComponentFixture<GenerictableCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerictableCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerictableCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
