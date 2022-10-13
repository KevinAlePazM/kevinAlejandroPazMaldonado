import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaprunhombreComponent } from './zaprunhombre.component';

describe('ZaprunhombreComponent', () => {
  let component: ZaprunhombreComponent;
  let fixture: ComponentFixture<ZaprunhombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaprunhombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaprunhombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
