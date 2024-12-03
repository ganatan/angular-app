import { Routes } from '@angular/router';

import { AboutComponent } from './about.component';

export const routes: Routes = [
  {
    path: '', component: AboutComponent, children: [
      {
        path: '',
        loadComponent: () => import(`./experience/experience.component`)
          .then(mod => mod.ExperienceComponent)
      },
      {
        path: 'experience',
        loadComponent: () => import(`./experience/experience.component`)
          .then(mod => mod.ExperienceComponent)
      },
      {
        path: 'skill',
        loadComponent: () => import(`./skill/skill.component`)
          .then(mod => mod.SkillComponent)
      },

      {
        path: '**',
        loadComponent: () => import(`./experience/experience.component`)
          .then(mod => mod.ExperienceComponent)
      },

    ]
  },
];