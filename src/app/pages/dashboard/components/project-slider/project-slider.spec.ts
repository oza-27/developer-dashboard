import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectSlider } from './project-slider';
import { PortfolioProject } from '../../dashboard.data';

describe('ProjectSlider', () => {
  let component: ProjectSlider;
  let fixture: ComponentFixture<ProjectSlider>;

  const projects: PortfolioProject[] = [
    { name: 'A', description: 'A', tech: ['t'], architecture: 'x' },
    { name: 'B', description: 'B', tech: ['t'], architecture: 'x' },
    { name: 'C', description: 'C', tech: ['t'], architecture: 'x' },
    { name: 'D', description: 'D', tech: ['t'], architecture: 'x' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ProjectSlider] }).compileComponents();

    fixture = TestBed.createComponent(ProjectSlider);
    component = fixture.componentInstance;
    component.projects = projects;
    fixture.detectChanges();
  });

  it('should keep previous at boundary 0', () => {
    component.currentIndex = 0;
    component.prev();
    expect(component.currentIndex).toBe(0);
  });

  it('should keep next at end boundary', () => {
    component.visibleCount = 3;
    component.currentIndex = 1;
    component.next();
    expect(component.currentIndex).toBe(1);
  });

  it('should update visible count for mobile', () => {
    component.onResize({ target: { innerWidth: 500 } } as unknown as UIEvent);
    expect(component.visibleCount).toBe(1);
  });
});
