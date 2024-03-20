import { Routes } from '@angular/router';
import { ExemploComponent } from './pages/exemplo/exemplo.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'exemplo',
        pathMatch: 'full',
    },
    {
        path: 'exemplo',
        component: ExemploComponent,
    },
    {
        path: '**',
        redirectTo: 'exemplo',
    },
];
