import {
    Component,
    inject,
    computed
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MozTooltipDirective, MozButton, MozIcon } from 'mozek-angular';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { DocService } from 'src/app/services/doc.service';
import { MozekCode } from "src/app/assets/components/codesample";
import { MozekDividerFileCode } from "src/app/assets/components/codedividersample";

@Component({
    selector: 'app-lib-component',
    imports: [
        CommonModule,
        MozTooltipDirective,
        MozButton,
        MozIcon,
        MozekCode,
        MozekDividerFileCode
    ],
    templateUrl: './tooltip.html',
    styleUrls: ['./tooltip.scss', '../lib-components.scss'],
    standalone: true
})
export class Tooltip {
    title = 'tooltip'
    description = 'The Mozek Tooltip component displays informative text when users hover over, focus on, or tap an element. It is implemented as a lightweight directive that automatically handles collision detection and positioning.'

    public responsive = inject(ResponsiveService);
    public doc = inject(DocService);
    screen = computed(() => this.responsive.breakpoint());

    openMap: Record<string, boolean> = {};
    openSource(key: string) {
        this.openMap[key] = !this.openMap[key];
    }
    isOpen(key: string): boolean {
        return !!this.openMap[key];
    }
}
