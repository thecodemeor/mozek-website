import { Component, inject, computed, signal, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute, NavigationEnd } from '@angular/router';

import { filter, map } from 'rxjs/operators';

import { MozIcon, MozButton } from 'mozek-angular';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { DocService } from 'src/app/services/doc.service';

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
    public readonly doc = inject(DocService);

    readonly screen = computed(() => this.responsive.breakpoint());
    readonly isDrawerOpen = signal(false);
    
    readonly drawerTransform = computed(() => 
        this.isDrawerOpen() ? 'translateX(0)' : 'translateX(-100%)'
    );

    components = [
        'accordion', 'badge', 'breadcrumbs', 'button', 'button-icon', 'card', 'checkbox', 
        'currency', 'datepicker', 'dialog', 'divider', 'icon', 'input', 'menu', 
        'pagination', 'progress', 'radio', 'select', 'snackbar', 'snackbar-queue', 'switch', 'tooltip', 'tutor'
    ];

    searchQuery = signal('');
    filteredComponents = computed(() => {
        const query = this.searchQuery().toLowerCase();
        return this.components.filter(c => c.toLowerCase().includes(query));
    });

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

        this.router.navigate([component], { relativeTo: this.route });
    }

    onSearch(event: Event) {
        const target = event.target as HTMLInputElement;
        this.searchQuery.set(target.value);
    }
}