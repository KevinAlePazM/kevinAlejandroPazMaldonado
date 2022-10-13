import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapsnemujerComponent } from './zapsnemujer.component';

describe('ZapsnemujerComponent', () => {
  let component: ZapsnemujerComponent;
  let fixture: ComponentFixture<ZapsnemujerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZapsnemujerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZapsnemujerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
