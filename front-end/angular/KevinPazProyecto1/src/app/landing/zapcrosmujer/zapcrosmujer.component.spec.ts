import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapcrosmujerComponent } from './zapcrosmujer.component';

describe('ZapcrosmujerComponent', () => {
  let component: ZapcrosmujerComponent;
  let fixture: ComponentFixture<ZapcrosmujerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZapcrosmujerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZapcrosmujerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
