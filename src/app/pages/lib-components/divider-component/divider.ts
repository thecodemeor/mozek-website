import {
    Component,
    inject,
    computed
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MozIcon, MozDivider } from 'mozek-angular';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { DocService } from 'src/app/services/doc.service';
import { MozekCode } from 'src/app/assets/components/codesample';
import { MozekDividerFileCode } from "src/app/assets/components/codedividersample";

type MozColorName =
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warn'
    | 'danger';

@Component({
    selector: 'app-lib-component',
    imports: [
    CommonModule,
    MozekCode,
    MozIcon,
    MozDivider,
        MozekDividerFileCode
    ],
    templateUrl: './divider.html',
    styleUrls: ['./divider.scss', '../lib-components.scss'],
})
export class Divider {
    title = 'divider';
    description = 'The Mozek Divider component provides a visual separator between sections of content. It supports various styling options, including different thicknesses, colors, and orientations. The component is designed to be responsive and accessible, ensuring a consistent look and feel across devices and for all users.';

    public responsive = inject(ResponsiveService);
    public doc = inject(DocService);
    screen = computed(() => this.responsive.breakpoint());

    colors: MozColorName[] = [ 'primary', 'secondary', 'success', 'warn', 'danger']

    openMap: Record<string, boolean> = {};
    openSource(key: string) {
        this.openMap[key] = !this.openMap[key];
    }
    isOpen(key: string): boolean {
        return !!this.openMap[key];
    }
}