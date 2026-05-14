import {
    Component,
    inject,
    computed
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MozMenu, MozMenuTrigger, MozMenuItem, MozButton, MozIcon, MozDivider } from 'mozek-angular';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { DocService } from 'src/app/services/doc.service';
import { MozekCode } from "src/app/assets/components/codesample";
import { MozekDividerFileCode } from "src/app/assets/components/codedividersample";

@Component({
    selector: 'app-lib-component',
    imports: [
        CommonModule,
        MozMenu,
        MozMenuTrigger,
        MozMenuItem,
        MozButton,
        MozIcon,
        MozDivider,
        MozekCode,
        MozekDividerFileCode
    ],
    templateUrl: './menu.html',
    styleUrls: ['./menu.scss', '../lib-components.scss'],
    standalone: true
})
export class Menu {
    title = 'menu'
    description = 'The Mozek Menu component provides a sleek, overlay-based navigation or action list. It can be attached to any trigger element and supports flexible positioning across both X and Y axes.'

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

    onItemClick(action: string) {
        console.log('Action triggered:', action);
    }
}
