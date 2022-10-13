import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InisesionComponent } from './inisesion.component';

describe('InisesionComponent', () => {
  let component: InisesionComponent;
  let fixture: ComponentFixture<InisesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InisesionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InisesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
