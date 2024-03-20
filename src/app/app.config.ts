import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideAnimationsAsync(),
        { provide: LOCALE_ID, useValue: 'pt-BR' },
    ],
};
