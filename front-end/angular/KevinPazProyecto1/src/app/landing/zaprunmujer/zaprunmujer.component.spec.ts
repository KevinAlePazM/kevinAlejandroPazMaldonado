import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaprunmujerComponent } from './zaprunmujer.component';

describe('ZaprunmujerComponent', () => {
  let component: ZaprunmujerComponent;
  let fixture: ComponentFixture<ZaprunmujerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaprunmujerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaprunmujerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
