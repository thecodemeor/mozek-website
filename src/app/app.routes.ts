import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },

    { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
    { path: 'get-started', loadComponent: () => import('./pages/get-started/get-started').then(m => m.GetStarted) },
    { path: 'updates', loadComponent: () => import('./pages/update-ver/updates').then(m => m.Updates) },
    { path: 'components', loadComponent: () => import('./pages/lib-components/lib-components').then(m => m.LibComponents),
        children: [
            { path: '', redirectTo: 'button', pathMatch: 'full' },
            { path: 'accordion', loadComponent: () => import('./pages/lib-components/accordion-component/accordion').then(m => m.Accordion) },
            { path: 'badge', loadComponent: () => import('./pages/lib-components/badge-component/badge').then(m => m.Badge) },
            { path: 'button', loadComponent: () => import('./pages/lib-components/button-component/button').then(m => m.Button) },
            { path: 'button-icon', loadComponent: () => import('./pages/lib-components/button-icon-component/button-icon').then(m => m.ButtonIcon) },
            { path: 'card', loadComponent: () => import('./pages/lib-components/card-component/card').then(m => m.Card) },
            { path: 'checkbox', loadComponent: () => import('./pages/lib-components/checkbox-component/checkbox').then(m => m.Checkbox) },
            { path: 'currency', loadComponent: () => import('./pages/lib-components/currency-component/currency').then(m => m.Currency) },
            { path: 'datepicker', loadComponent: () => import('./pages/lib-components/datepicker-component/datepicker').then(m => m.Datepicker) },
            { path: 'divider', loadComponent: () => import('./pages/lib-components/divider-component/divider').then(m => m.Divider) },
            { path: 'input', loadComponent: () => import('./pages/lib-components/input-component/input').then(m => m.Input) },
            { path: 'pagination', loadComponent: () => import('./pages/lib-components/pagination-component/pagination').then(m => m.Pagination) },
            { path: 'progress', loadComponent: () => import('./pages/lib-components/progress-component/progress').then(m => m.Progress) },
            { path: 'radio', loadComponent: () => import('./pages/lib-components/radio-component/radio').then(m => m.Radio) },
            { path: 'select', loadComponent: () => import('./pages/lib-components/select-component/select').then(m => m.Select) },
            { path: 'switch', loadComponent: () => import('./pages/lib-components/switch-component/switch').then(m => m.Switch) }
        ]
    },
    { path: 'utilities', loadComponent: () => import('./pages/lib-utilities/lib-utilities').then(m => m.LibUtilities) },
    { path: 'tokens', loadComponent: () => import('./pages/lib-tokens/lib-tokens').then(m => m.LibTokens) },
    { path: 'themes', loadComponent: () => import('./pages/lib-themes/lib-themes').then(m => m.LibThemes) },
    { path: 'icons', loadComponent: () => import('./pages/icons/icons').then(m => m.Icons) },

    { path: '**', redirectTo: 'home' },
];