import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  isDarkMode = false;
  skills = [
    {
      name: 'Frontend Development',
      percentage: 90,
      technologies: 'Angular • TypeScript • Tailwind'
    },
    {
      name: 'Backend Development',
      percentage: 88,
      technologies: '.NET Core • Web API • C#'
    },
    {
      name: 'Database Management',
      percentage: 85,
      technologies: 'PostgreSQL • SQL'
    },
    {
      name: 'AI / Machine Learning',
      percentage: 65,
      technologies: 'AI APIs • ML Basics'
    }
  ];

  projects = [
    {
      name: 'Invoice SaaS Platform',
      description: 'A SaaS platform to generate invoices and manage clients.',
      tech: 'Angular • .NET Core • PostgreSQL',
      architecture: 'JWT Auth • REST APIs • Clean Architecture'
    },
    {
      name: 'Records Dashboard',
      description: 'Analytics dashboard for tracking promotions and active customers.',
      tech: 'Angular • Web API • SQL',
      architecture: 'Data Visualization • API Integration'
    },
    {
      name: 'Dynamics Asset Integration',
      description: 'System integration between Dynamics and internal asset management.',
      tech: '.NET Core • PostgreSQL',
      architecture: 'Sync APIs • Data Mapping'
    }
  ];

  architecture = [
    {
      layer: 'Frontend',
      tech: 'Angular + Tailwind',
      description: 'Responsive UI with component-driven architecture.'
    },
    {
      layer: 'API Layer',
      tech: '.NET Core Web API',
      description: 'REST APIs with JWT authentication and clean architecture.'
    },
    {
      layer: 'Database',
      tech: 'PostgreSQL',
      description: 'Relational database with optimized queries and Dapper ORM.'
    },
    {
      layer: 'AI Integration',
      tech: 'AI APIs / ML Services',
      description: 'AI capabilities integrated via APIs for automation and insights.'
    }
  ];

  chartOptions: any = {
    series: [
      {
        name: 'Skill Level',
        data: [90, 88, 85, 65]
      }
    ],
    chart: {
      type: 'radar',
      height: 350,
      toolbar: { show: false }
    },

    xaxis: {
      categories: ['Frontend', 'Backend', 'Database', 'AI'],
      labels: {
        style: {
          colors: ['#9CA3AF', '#9CA3AF', '#9CA3AF', '#9CA3AF']
        }
      }
    },

    tooltip: {
      theme: 'dark'
    },

    colors: ['#3b82f6']
  };

  metrics = [
    {
      title: 'Projects Built',
      value: '6+'
    },
    {
      title: 'APIs Developed',
      value: '18+'
    },
    {
      title: 'Database Queries',
      value: '120+'
    },
    {
      title: 'AI Integrations',
      value: '4'
    },
    {
      title: 'Years Experience',
      value: '2+'
    }
  ];

  timeline = [
    {
      year: '2023',
      title: 'Started Full Stack Development',
      description: 'Focused on Angular, TypeScript and frontend architecture.'
    },
    {
      year: '2024',
      title: 'Built Records Dashboard',
      description: 'Developed analytics dashboard using Angular and .NET Web API.'
    },
    {
      year: '2025',
      title: 'Built Invoice SaaS Platform',
      description: 'Created a SaaS system with authentication, client and invoice management.'
    },
    {
      year: '2026',
      title: 'Exploring AI Integration',
      description: 'Learning AI APIs and automation for modern applications.'
    }
  ];
  ngOnInit() {

    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      this.isDarkMode = true;
    }

  }

  toggleTheme() {

    this.isDarkMode = !this.isDarkMode;

    const root = document.documentElement;

    if (this.isDarkMode) {
      root.classList.add('dark');
      this.chartOptions.tooltip = { theme: 'dark' };
    } else {
      root.classList.remove('dark');
      this.chartOptions.tooltip = { theme: 'light' };
    }

  }
}