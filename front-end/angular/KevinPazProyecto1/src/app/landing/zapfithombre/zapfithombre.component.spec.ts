import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapfithombreComponent } from './zapfithombre.component';

describe('ZapfithombreComponent', () => {
  let component: ZapfithombreComponent;
  let fixture: ComponentFixture<ZapfithombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZapfithombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZapfithombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
