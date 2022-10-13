import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaptrehombreComponent } from './zaptrehombre.component';

describe('ZaptrehombreComponent', () => {
  let component: ZaptrehombreComponent;
  let fixture: ComponentFixture<ZaptrehombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaptrehombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaptrehombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
