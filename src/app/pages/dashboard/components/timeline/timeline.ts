import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineItem } from '../../dashboard.data';

@Component({
  selector: 'app-timeline',
  imports: [CommonModule],
  templateUrl: './timeline.html',
})
export class Timeline {
  @Input({ required: true }) timeline: TimelineItem[] = [];
}
