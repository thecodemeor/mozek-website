import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },

    { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
    { path: 'components', loadComponent: () => import('./pages/lib-components/lib-components').then(m => m.LibComponents),
        children: [
            { path: '', redirectTo: 'button', pathMatch: 'full' },
            { path: 'accordion', loadComponent: () => import('./pages/lib-components/accordion-component/accordion').then(m => m.Accordion) },
            { path: 'badge', loadComponent: () => import('./pages/lib-components/badge-component/badge').then(m => m.Badge) },
            { path: 'button', loadComponent: () => import('./pages/lib-components/button-component/button').then(m => m.Button) },
            { path: 'button-icon', loadComponent: () => import('./pages/lib-components/button-icon-component/button-icon').then(m => m.ButtonIcon) },
            { path: 'card', loadComponent: () => import('./pages/lib-components/card-component/card').then(m => m.Card) },
        ]
    },
    { path: 'utilities', loadComponent: () => import('./pages/lib-utilities/lib-utilities').then(m => m.LibUtilities) },
    { path: 'tokens', loadComponent: () => import('./pages/lib-tokens/lib-tokens').then(m => m.LibTokens) },
    { path: 'themes', loadComponent: () => import('./pages/lib-themes/lib-themes').then(m => m.LibThemes) },
    { path: 'icons', loadComponent: () => import('./pages/icons/icons').then(m => m.Icons) },

    { path: '**', redirectTo: 'home' },
];