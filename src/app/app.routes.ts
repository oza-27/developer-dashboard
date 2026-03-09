import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { FrontendSkills } from './pages/frontend-skills/frontend-skills';
import { BackendSkills } from './pages/backend-skills/backend-skills';
import { AiSkills } from './pages/ai-skills/ai-skills';
import { Projects } from './pages/projects/projects';
import { Architecture } from './pages/architecture/architecture';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            { path: '', component: Dashboard },
            { path: 'frontend', component: FrontendSkills },
            { path: 'backend', component: BackendSkills },
            { path: 'ai', component: AiSkills },
            { path: 'projects', component: Projects },
            { path: 'architecture', component: Architecture }
        ]
    }
];
