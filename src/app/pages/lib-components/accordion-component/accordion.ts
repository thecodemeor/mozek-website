import {
    Component,
    inject,
    computed
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { MozAccordion, MozAccordionItem, MozIcon } from 'mozek-angular';

@Component({
    selector: 'app-lib-component',
    imports: [
        CommonModule,
        MozIcon,
        MozAccordion,
        MozAccordionItem
    ],
    templateUrl: './accordion.html',
    styleUrls: ['./accordion.scss', '../lib-components.scss'],
})
export class Accordion {
    public responsive = inject(ResponsiveService);
    screen = computed(() => this.responsive.breakpoint());

    openMap: Record<string, boolean> = {};
    openSource(key: string) {
        this.openMap[key] = !this.openMap[key];
    }
    isOpen(key: string): boolean {
        return !!this.openMap[key];
    }
}