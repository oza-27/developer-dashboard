import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly themeKey = 'theme';
  readonly isDarkMode = signal(false);

  initialize(): void {
    const storedTheme = localStorage.getItem(this.themeKey);
    const shouldUseDark = storedTheme === 'dark';

    this.isDarkMode.set(shouldUseDark);
    this.applyTheme(shouldUseDark);
  }

  toggle(): void {
    const nextValue = !this.isDarkMode();
    this.isDarkMode.set(nextValue);
    this.applyTheme(nextValue);
    localStorage.setItem(this.themeKey, nextValue ? 'dark' : 'light');
  }

  private applyTheme(isDark: boolean): void {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add('dark');
      return;
    }

    root.classList.remove('dark');
  }
}
