import { AfterViewInit, Component } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-frontend-skills',
  imports: [],
  templateUrl: './frontend-skills.html',
  styleUrl: './frontend-skills.css',
})
export class FrontendSkills implements AfterViewInit {
  ngAfterViewInit(): void {

    const ctx = document.getElementById('skillChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Angular', 'React', 'TypeScript', 'TailwindCSS'],
        datasets: [
          {
            label: 'Skill Level',
            data: [80, 55, 75, 60],
            backgroundColor: [
              '#dd0031',
              '#3178c6',
              '#38bdf8'
            ]
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });

  }
}
