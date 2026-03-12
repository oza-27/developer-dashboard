import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Metric } from '../../dashboard.data';

@Component({
  selector: 'app-metrics-cards',
  imports: [CommonModule],
  templateUrl: './metrics-cards.html',
})
export class MetricsCards {
  @Input({ required: true }) metrics: Metric[] = [];
}
