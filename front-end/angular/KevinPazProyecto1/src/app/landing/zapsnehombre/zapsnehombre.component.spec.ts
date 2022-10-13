import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapsnehombreComponent } from './zapsnehombre.component';

describe('ZapsnehombreComponent', () => {
  let component: ZapsnehombreComponent;
  let fixture: ComponentFixture<ZapsnehombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZapsnehombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZapsnehombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
