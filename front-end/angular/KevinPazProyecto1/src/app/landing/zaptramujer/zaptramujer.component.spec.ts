import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaptramujerComponent } from './zaptramujer.component';

describe('ZaptramujerComponent', () => {
  let component: ZaptramujerComponent;
  let fixture: ComponentFixture<ZaptramujerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaptramujerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaptramujerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
