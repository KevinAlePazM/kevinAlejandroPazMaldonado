import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesplazarComponent } from './desplazar.component';

describe('DesplazarComponent', () => {
  let component: DesplazarComponent;
  let fixture: ComponentFixture<DesplazarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesplazarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesplazarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
