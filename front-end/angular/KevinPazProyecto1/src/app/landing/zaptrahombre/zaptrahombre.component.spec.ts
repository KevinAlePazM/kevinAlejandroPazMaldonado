import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaptrahombreComponent } from './zaptrahombre.component';

describe('ZaptrahombreComponent', () => {
  let component: ZaptrahombreComponent;
  let fixture: ComponentFixture<ZaptrahombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaptrahombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaptrahombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
