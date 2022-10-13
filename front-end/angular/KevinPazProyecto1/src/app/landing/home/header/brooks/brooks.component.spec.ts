import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrooksComponent } from './brooks.component';

describe('BrooksComponent', () => {
  let component: BrooksComponent;
  let fixture: ComponentFixture<BrooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
