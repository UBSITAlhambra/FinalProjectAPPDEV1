import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes'; // Import your routes

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)], // Use your imported routes
};