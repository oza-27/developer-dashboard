import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { PortfolioProject } from '../../dashboard.data';

@Component({
  selector: 'app-project-slider',
  imports: [CommonModule],
  templateUrl: './project-slider.html',
})
export class ProjectSlider implements OnInit {
  @Input({ required: true }) projects: PortfolioProject[] = [];

  currentIndex = 0;
  visibleCount = 3;
  private touchStartX = 0;

  get translateX(): string {
    return `-${(this.currentIndex / this.visibleCount) * 100}%`;
  }

  ngOnInit(): void {
    this.updateVisibleCount(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent): void {
    const target = event.target as Window;
    this.updateVisibleCount(target.innerWidth);
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0]?.clientX ?? 0;
  }

  onTouchEnd(event: TouchEvent): void {
    const touchEndX = event.changedTouches[0]?.clientX ?? 0;
    const deltaX = touchEndX - this.touchStartX;

    if (Math.abs(deltaX) < 40) {
      return;
    }

    if (deltaX < 0) {
      this.next();
      return;
    }

    this.prev();
  }

  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
    }
  }

  next(): void {
    if (this.currentIndex + this.visibleCount < this.projects.length) {
      this.currentIndex += 1;
    }
  }

  private updateVisibleCount(width: number): void {
    if (width < 768) {
      this.visibleCount = 1;
    } else if (width < 1024) {
      this.visibleCount = 2;
    } else {
      this.visibleCount = 3;
    }

    const maxIndex = Math.max(0, this.projects.length - this.visibleCount);
    this.currentIndex = Math.min(this.currentIndex, maxIndex);
  }
}
