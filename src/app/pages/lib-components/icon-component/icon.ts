import {
    Component,
    inject,
    computed
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MozIcon, MozButton } from 'mozek-angular';
import { RouterLink } from '@angular/router';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { DocService } from 'src/app/services/doc.service';
import { MozekCode } from "src/app/assets/components/codesample";
import { MozekDividerFileCode } from "src/app/assets/components/codedividersample";

@Component({
    selector: 'app-lib-component',
    imports: [
        CommonModule,
        MozIcon,
        MozButton,
        MozekCode,
        RouterLink,
        MozekDividerFileCode
    ],
    templateUrl: './icon.html',
    styleUrls: ['./icon.scss', '../lib-components.scss'],
    standalone: true
})
export class Icon {
    title = 'icon'
    description = 'The Mozek Icon component provides a flexible and efficient way to display vector icons. It supports semantic coloring, custom hex codes, and adjustable sizing to fit seamlessly into any part of your application.'

    public responsive = inject(ResponsiveService);
    public doc = inject(DocService);
    screen = computed(() => this.responsive.breakpoint());

    colors = ['primary', 'secondary', 'success', 'warn', 'danger'];
    sizes = ['20', '30', '40', '50', '60'];
    sampleIcons = ['home', 'settings', 'add_circle', 'check_circle', 'search', 'bell', 'heart'];

    openMap: Record<string, boolean> = {};
    openSource(key: string) {
        this.openMap[key] = !this.openMap[key];
    }
    isOpen(key: string): boolean {
        return !!this.openMap[key];
    }
}
