import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should initialize dark mode from storage', () => {
    localStorage.setItem('theme', 'dark');
    service.initialize();
    expect(service.isDarkMode()).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('should persist theme on toggle', () => {
    service.initialize();
    service.toggle();
    expect(localStorage.getItem('theme')).toBe('dark');
  });
});
