import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import './app/extensions/date.extensions';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
