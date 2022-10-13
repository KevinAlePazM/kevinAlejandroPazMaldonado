import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HokaComponent } from './hoka.component';

describe('HokaComponent', () => {
  let component: HokaComponent;
  let fixture: ComponentFixture<HokaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HokaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HokaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
