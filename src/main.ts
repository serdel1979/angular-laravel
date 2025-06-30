import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './app/interceptors/token.interceptor';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideHttpClient(
      withInterceptors([
        tokenInterceptor
      ])
    ),
  ],
});
