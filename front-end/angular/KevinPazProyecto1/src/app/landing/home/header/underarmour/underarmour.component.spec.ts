import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderarmourComponent } from './underarmour.component';

describe('UnderarmourComponent', () => {
  let component: UnderarmourComponent;
  let fixture: ComponentFixture<UnderarmourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderarmourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderarmourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
