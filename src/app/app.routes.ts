import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';

export const routes: Routes = [
    {
        path: '', component: AboutMeComponent
    },
    {
        path: 'experience', loadComponent: () => import('./experience/experience.component').then(m => m.ExperienceComponent)
    },
    {
        path: 'projects', loadComponent: () => import('./projects/projects.component').then(m => m.ProjectsComponent)
    },
    {
        path: 'education', loadComponent: () => import('./education/education.component').then(m => m.EducationComponent)
    },
    {
        path: 'connect', loadComponent: () => import('./connect-with-me/connect-with-me.component').then(m => m.ConnectWithMeComponent)
    }
];
