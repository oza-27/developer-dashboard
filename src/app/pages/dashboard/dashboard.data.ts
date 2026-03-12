export interface Skill {
  name: string;
  percentage: number;
  technologies: string;
}

export interface PortfolioProject {
  name: string;
  description: string;
  tech: string[];
  architecture: string;
  github?: string;
  demo?: string;
}

export interface ArchitectureLayer {
  layer: string;
  tech: string;
  description: string;
}

export interface Metric {
  title: string;
  value: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export const SKILLS: Skill[] = [
  { name: 'Frontend Development', percentage: 90, technologies: 'Angular • TypeScript • Tailwind' },
  { name: 'Backend Development', percentage: 88, technologies: '.NET Core • Web API • C#' },
  { name: 'Database Management', percentage: 85, technologies: 'PostgreSQL • SQL' },
  { name: 'AI / Machine Learning', percentage: 65, technologies: 'AI APIs • ML Basics' },
];

export const PROJECTS: PortfolioProject[] = [
  {
    name: 'ERP Web Platform',
    description:
      'Developed modern ERP modules using Angular with scalable architecture and secure authentication. Integrated with Microsoft Dynamics 365 Finance & Operations.',
    tech: ['Angular', 'TypeScript', '.NET Core', 'REST API', 'Microsoft Dynamics F&O'],
    architecture: 'Enterprise ERP System • API Integration',
    github: 'https://github.com/oza-27',
  },
  {
    name: 'HiMapp ERP API',
    description:
      'Designed scalable backend APIs using .NET Core with JWT authentication and optimized PostgreSQL queries.',
    tech: ['.NET Core', 'EF Core', 'PostgreSQL', 'JWT'],
    architecture: 'REST API • Repository Pattern',
  },
  {
    name: 'Revords Rewards App',
    description:
      'Mobile rewards platform where users spin promotional wheels to earn rewards and cashback at partner restaurants.',
    tech: ['React Native', 'Firebase'],
    architecture: 'Mobile Rewards Platform',
  },
  {
    name: 'Revords Web Platform',
    description:
      'Spin-wheel promotional web application allowing users to win prizes and promo codes using Angular frontend and .NET backend.',
    tech: ['Angular', '.NET Core', 'TypeScript'],
    architecture: 'Full Stack Web Application',
  },
  {
    name: 'E-Commerce Bookstore',
    description: 'Online bookstore platform enabling users to buy and exchange books with scalable backend services.',
    tech: ['.NET Framework', 'C#', 'SQL'],
    architecture: 'E-Commerce System',
  },
  {
    name: 'Revords Android Launcher',
    description: 'Custom Android tablet launcher built with Flutter supporting kiosk mode and app management.',
    tech: ['Flutter', 'Android'],
    architecture: 'Android Launcher',
  },
  {
    name: 'RPA Automation System',
    description:
      'Built Python automation workflows to automate repetitive tasks such as data extraction, reporting, and system navigation.',
    tech: ['Python', 'Automation', 'RPA'],
    architecture: 'Process Automation',
  },
];

export const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  { layer: 'Frontend', tech: 'Angular + Tailwind', description: 'Responsive UI with component-driven architecture.' },
  { layer: 'API Layer', tech: '.NET Core Web API', description: 'REST APIs with JWT auth and clean architecture.' },
  { layer: 'Database', tech: 'PostgreSQL', description: 'Relational database with optimized queries and Dapper ORM.' },
  { layer: 'AI Integration', tech: 'AI APIs / ML Services', description: 'AI capabilities integrated for automation and insights.' },
];

export const METRICS: Metric[] = [
  { title: 'Projects Built', value: '6+' },
  { title: 'APIs Developed', value: '50+' },
  { title: 'Database Queries', value: '150+' },
  { title: 'AI Integrations', value: '4' },
  { title: 'Years Experience', value: '2+' },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: '2023',
    title: 'Started Software Development Journey',
    description:
      'Completed a 6-month internship as a .NET Developer while learning Angular and building full-stack applications.',
  },
  {
    year: '2024',
    title: 'Full Stack Developer',
    description:
      'Built scalable web applications using Angular, React, .NET, and Node.js with REST APIs and modern frontend architecture.',
  },
  {
    year: '2025',
    title: 'Cloud & Modern Web Development',
    description:
      'Expanded skills in AWS cloud services, Next.js, system architecture, and performance-focused application development.',
  },
  {
    year: '2026',
    title: 'AI & System Architecture Focus',
    description: 'Focused on AI integrations, ML models, and scalable backend system design.',
  },
];
