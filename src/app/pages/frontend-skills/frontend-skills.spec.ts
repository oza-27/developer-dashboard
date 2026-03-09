import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendSkills } from './frontend-skills';

describe('FrontendSkills', () => {
  let component: FrontendSkills;
  let fixture: ComponentFixture<FrontendSkills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendSkills]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontendSkills);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
