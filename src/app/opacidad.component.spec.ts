import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpacidadComponent } from './opacidad.component';

describe('OpacidadComponent', () => {
  let component: OpacidadComponent;
  let fixture: ComponentFixture<OpacidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpacidadComponent]
    });
    fixture = TestBed.createComponent(OpacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
