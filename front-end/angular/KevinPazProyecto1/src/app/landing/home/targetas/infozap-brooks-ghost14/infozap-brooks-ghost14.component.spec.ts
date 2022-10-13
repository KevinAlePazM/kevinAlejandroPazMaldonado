import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfozapBrooksGhost14Component } from './infozap-brooks-ghost14.component';

describe('InfozapBrooksGhost14Component', () => {
  let component: InfozapBrooksGhost14Component;
  let fixture: ComponentFixture<InfozapBrooksGhost14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfozapBrooksGhost14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfozapBrooksGhost14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
