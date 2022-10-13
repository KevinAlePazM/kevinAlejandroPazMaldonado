import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapfitmujerComponent } from './zapfitmujer.component';

describe('ZapfitmujerComponent', () => {
  let component: ZapfitmujerComponent;
  let fixture: ComponentFixture<ZapfitmujerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZapfitmujerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZapfitmujerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
