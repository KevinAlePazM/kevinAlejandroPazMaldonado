import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalomonComponent } from './salomon.component';

describe('SalomonComponent', () => {
  let component: SalomonComponent;
  let fixture: ComponentFixture<SalomonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalomonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalomonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
