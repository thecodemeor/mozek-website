import {
    Component,
    inject,
    computed
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MozAccordion, MozAccordionItem, MozIcon } from 'mozek-angular';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { MozekCode } from "src/app/assets/components/codesample";

@Component({
    selector: 'app-lib-component',
    imports: [
        CommonModule,
        MozekCode,
        MozIcon,
        MozAccordion,
        MozAccordionItem
    ],
    templateUrl: './accordion.html',
    styleUrls: ['./accordion.scss', '../lib-components.scss'],
})
export class Accordion {
    title = 'accordion'
    description = 'A flexible UI component that allows content to expand and collapse, helping you organize information in a compact and readable way. Perfect for FAQs, menus, or any content-heavy layout.'

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