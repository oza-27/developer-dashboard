import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
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
}
