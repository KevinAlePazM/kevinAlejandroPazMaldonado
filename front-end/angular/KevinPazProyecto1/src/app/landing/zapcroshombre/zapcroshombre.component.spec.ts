import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapcroshombreComponent } from './zapcroshombre.component';

describe('ZapcroshombreComponent', () => {
  let component: ZapcroshombreComponent;
  let fixture: ComponentFixture<ZapcroshombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZapcroshombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZapcroshombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
