import { Component, inject, computed, signal, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute, NavigationEnd } from '@angular/router';

import { filter, map } from 'rxjs/operators';
import { MozIcon, MozButton } from 'mozek-angular';

import { ResponsiveService } from 'src/app/services/responsive.service';

@Component({
    selector: 'app-lib-component',
    standalone: true,
    imports: [
        RouterModule,
        MozButton,
        MozIcon
    ],
    templateUrl: './lib-components.html',
    styleUrl: './lib-components.scss',
})
export class LibComponents implements OnInit {
    private readonly router = inject(Router);
    private readonly route = inject(ActivatedRoute);
    private readonly responsive = inject(ResponsiveService);

    readonly screen = computed(() => this.responsive.breakpoint());
    readonly isDrawerOpen = signal(false);
    
    readonly drawerTransform = computed(() => 
        this.isDrawerOpen() ? 'translateX(0)' : 'translateX(-100%)'
    );

    components = [
        'accordion', 'badge', 'button', 'button-icon', 'card',
        'checkbox', 'currency', 'datepicker', 'divider', 'icon', 
        'input', 'pagination', 'progress', 'radio', 'select', 'switch'
    ];

    componentActive = signal('');

    ngOnInit() {
        this.route.url.subscribe(() => {
            this.componentActive.set(this.router.url.split('/').pop() ?? '');
        });
    }

    toggleDrawer() {
        this.isDrawerOpen.update(v => !v);
    }

    navigateTo(component: string) {
        this.componentActive.set(component);
        this.isDrawerOpen.set(false);

        if (component === 'icon') {
            this.router.navigate(['/icons']);
        } else {
            this.router.navigate([component], { relativeTo: this.route });
        }
    }
}