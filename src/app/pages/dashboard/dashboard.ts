import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexMarkers,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { ThemeService } from '../../core/theme.service';
import {
  ARCHITECTURE_LAYERS,
  METRICS,
  PROJECTS,
  SKILLS,
  TIMELINE,
} from './dashboard.data';
import { MetricsCards } from './components/metrics-cards/metrics-cards';
import { SkillsOverview } from './components/skills-overview/skills-overview';
import { ProjectSlider } from './components/project-slider/project-slider';
import { Timeline } from './components/timeline/timeline';


type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  fill: ApexFill;
  markers: ApexMarkers;
  tooltip: ApexTooltip;
  colors: string[];
};
@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    NgApexchartsModule,
    MetricsCards,
    SkillsOverview,
    ProjectSlider,
    Timeline,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  private readonly themeService = inject(ThemeService);

  readonly skills = SKILLS;
  readonly projects = PROJECTS;
  readonly architecture = ARCHITECTURE_LAYERS;
  readonly metrics = METRICS;
  readonly timeline = TIMELINE;

  chartOptions: ChartOptions = {
    series: [{ name: 'Skill Level', data: [90, 88, 85, 65, 80] }],
    chart: { type: 'radar', height: 350, toolbar: { show: false } },
    xaxis: {
      categories: ['Frontend', 'Backend', 'Database', 'AI', 'System Design'],
      labels: { style: { colors: ['#9CA3AF', '#9CA3AF', '#9CA3AF', '#9CA3AF', '#9CA3AF'] } },
    },
    colors: ['#3b82f6'],
    stroke: { width: 2 },
    fill: { opacity: 0.3 },
    markers: { size: 5 },
    tooltip: { theme: 'dark' },
    yaxis: { show: false, max: 100 },
  };

  get isDarkMode(): boolean {
    return this.themeService.isDarkMode();
  }

  ngOnInit(): void {
    this.themeService.initialize();
    this.setChartTooltipTheme();
  }

  toggleTheme(): void {
    this.themeService.toggle();
    this.setChartTooltipTheme();
  }

  private setChartTooltipTheme(): void {
    this.chartOptions = {
      ...this.chartOptions,
      tooltip: { theme: this.isDarkMode ? 'dark' : 'light' },
    };
  }
}
