import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AscicsComponent } from './ascics.component';

describe('AscicsComponent', () => {
  let component: AscicsComponent;
  let fixture: ComponentFixture<AscicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AscicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AscicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
