import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './core/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()), // ✅ uses DI for interceptors
    provideAnimations(),
    importProvidersFrom(MatSnackBarModule),

    // register your interceptor in DI
   // Correct way to register HTTP interceptor
    {
      provide: HTTP_INTERCEPTORS  ,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
};
