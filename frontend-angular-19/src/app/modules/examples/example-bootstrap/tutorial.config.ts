import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './tutorial.routes';

export const tutorialConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
