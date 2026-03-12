import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard) },
      {
        path: 'frontend',
        loadComponent: () =>
          import('./pages/frontend-skills/frontend-skills').then((m) => m.FrontendSkills),
      },
      {
        path: 'backend',
        loadComponent: () =>
          import('./pages/backend-skills/backend-skills').then((m) => m.BackendSkills),
      },
      { path: 'ai', loadComponent: () => import('./pages/ai-skills/ai-skills').then((m) => m.AiSkills) },
      { path: 'projects', loadComponent: () => import('./pages/projects/projects').then((m) => m.Projects) },
      {
        path: 'architecture',
        loadComponent: () => import('./pages/architecture/architecture').then((m) => m.Architecture),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
