import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaptremujerComponent } from './zaptremujer.component';

describe('ZaptremujerComponent', () => {
  let component: ZaptremujerComponent;
  let fixture: ComponentFixture<ZaptremujerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaptremujerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaptremujerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
