import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Legend } from 'chart.js';
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
      name: "ERP Web Platform",
      description:
        "Developed modern ERP modules using Angular with scalable architecture and secure authentication. Implemented integration with Microsoft Dynamics 365 Finance & Operations services to synchronize enterprise data and streamline business processes.",
      tech: [
        "Angular",
        "TypeScript",
        ".NET Core",
        "REST API",
        "Microsoft Dynamics F&O"
      ],
      architecture: "Architecture: Enterprise ERP System • API Integration",
      github: "",
      demo: ""
    },
    {
      name: "HiMapp ERP API",
      description:
        "Designed scalable backend APIs using .NET Core to power ERP modules with JWT authentication and optimized PostgreSQL queries.",
      tech: [".NET Core", "EF Core", "PostgreSQL", "JWT"],
      architecture: "Architecture: REST API • Repository Pattern",
      github: "",
      demo: ""
    },
    {
      name: "Revords Rewards App",
      description:
        "Mobile rewards platform where users spin promotional wheels to earn rewards and cashback at partner restaurants.",
      tech: ["React Native", "Firebase"],
      architecture: "Architecture: Mobile Rewards Platform",
      github: "",
      demo: ""
    },
    {
      name: "Revords Web Platform",
      description:
        "Spin-wheel promotional web application allowing users to win prizes and promo codes using Angular frontend and .NET backend.",
      tech: ["Angular", ".NET Core", "TypeScript"],
      architecture: "Architecture: Full Stack Web Application",
      github: "",
      demo: ""
    },
    {
      name: "E-Commerce Bookstore",
      description:
        "Online bookstore platform enabling users to buy and exchange books with scalable backend services.",
      tech: [".NET Framework", "C#", "SQL"],
      architecture: "Architecture: E-Commerce System",
      github: "",
      demo: ""
    },
    {
      name: "Revords Android Launcher",
      description:
        "Custom Android tablet launcher built with Flutter supporting kiosk mode and application management.",
      tech: ["Flutter", "Android"],
      architecture: "Architecture: Android Launcher",
      github: "",
      demo: ""
    },
    {
      name: "RPA Automation System",
      description:
        "Built Python automation workflows to automate repetitive tasks such as data extraction, reporting, and system navigation.",
      tech: ["Python", "Automation", "RPA"],
      architecture: "Architecture: Process Automation",
      github: "",
      demo: ""
    }
  ];

  currentIndex = 0;
  visibleCount = 3; // show 3 projects at a time

  // Compute total width shift for sliding
  get translateX() {
    return `-${(this.currentIndex / this.visibleCount) * 100}%`;
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
    }
  }

  next() {
    if (this.currentIndex + this.visibleCount < this.projects.length) {
      this.currentIndex += 1;
    }
  }

  architecture = [
    {
      layer: 'Frontend',
      tech: 'React, Angular + Tailwind',
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
        data: [90, 88, 85, 65, 80]
      },
    ],

    chart: {
      type: 'radar',
      height: 350,
      toolbar: {
        show: false
      }
    },

    xaxis: {
      categories: ['Frontend', 'Backend', 'Database', 'AI', 'System Design'],
      labels: {
        style: {
          colors: ['#9CA3AF', '#9CA3AF', '#9CA3AF', '#9CA3AF', '#9CA3AF', "#0a0a0a"]
        }
      }
    },

    colors: ['#3b82f6'],

    stroke: {
      width: 2
    },

    fill: {
      opacity: 0.3
    },

    markers: {
      size: 5
    },

    tooltip: {
      theme: 'dark'
    },

    yaxis: {
      show: false,
      max: 100
    }
  };

  metrics = [
    {
      title: 'Projects Built',
      value: '6+'
    },
    {
      title: 'APIs Developed',
      value: '50+'
    },
    {
      title: 'Database Queries',
      value: '150+'
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
      title: 'Started Software Development Journey',
      description: 'Completed a 6-month internship as a .NET Developer while learning Angular and building full-stack applications using .NET Web API and TypeScript.'
    },
    {
      year: '2024',
      title: 'Full Stack Developer',
      description: 'Worked as a Full Stack Developer building scalable web applications using Angular, React, .NET, and Node.js with REST APIs and modern frontend architecture.'
    },
    {
      year: '2025',
      title: 'Cloud & Modern Web Development',
      description: 'Expanded skills in AWS cloud services, Next.js, system architecture, and performance-focused application development while also exploring Machine Learning algorithms.'
    },
    {
      year: '2026',
      title: 'AI & System Architecture Focus',
      description: 'Focused on Artificial Intelligence integrations, ML models, cloud architecture, and building intelligent systems with scalable backend design.'
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