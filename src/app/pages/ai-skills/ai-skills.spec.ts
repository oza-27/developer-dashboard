import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSkills } from './ai-skills';

describe('AiSkills', () => {
  let component: AiSkills;
  let fixture: ComponentFixture<AiSkills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiSkills]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiSkills);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
