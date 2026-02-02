import {
    Component,
    inject,
    computed
} from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { MozekButton } from 'src/app/assets/components/button';

import { MozButton } from 'mozek-angular';

@Component({
    selector: 'app-lib-component',
    imports: [
        RouterModule,
        MozekButton
    ],
    templateUrl: './lib-components.html',
    styleUrl: './lib-components.scss',
})
export class LibComponents {
    private readonly router = inject(Router);
    private readonly route = inject(ActivatedRoute);

    public responsive = inject(ResponsiveService);
    screen = computed(() => this.responsive.breakpoint());

    components = [ 'accordion', 'badge', 'button', 'button-icon', 'card',
        'checkbox', 'currency', 'datepicker', 'divider', 'icon', 'input',
        'pagination', 'progress', 'radio', 'select', 'switch'
    ];

    navigateTo(route: string) {
        this.router.navigate([route], { relativeTo: this.route });
    }
}
