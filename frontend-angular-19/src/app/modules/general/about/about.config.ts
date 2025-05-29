import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './about.routes';

export const aboutConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
