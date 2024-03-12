import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { socialInterceptor } from './interceptors/social.interceptor';

import { initializeApp, getApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from './fb/firebaseConfig';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideHttpClient(withInterceptors([socialInterceptor])),
  importProvidersFrom(
    provideFirebaseApp(() =>
      initializeApp(firebaseConfig))
  )
  ]
};
