import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendSkills } from './backend-skills';

describe('BackendSkills', () => {
  let component: BackendSkills;
  let fixture: ComponentFixture<BackendSkills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackendSkills]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendSkills);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
