import {
    Component,
    inject,
    computed
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MozButton, MozIcon } from 'mozek-angular';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { DocService } from 'src/app/services/doc.service';
import { MozekCode } from "src/app/assets/components/codesample";
import { MozekDividerFileCode } from "src/app/assets/components/codedividersample";

type MozButtonModel =
    | 'fill'
    | 'outline'
    | 'tonal'
    | 'elevated'
    | 'flavor'
    | 'glass'
    | 'text';

@Component({
    selector: 'app-lib-component',
    imports: [
    CommonModule,
    MozButton,
    MozIcon,
    MozekCode,
        MozekDividerFileCode
    ],
    templateUrl: './button.html',
    styleUrls: ['./button.scss', '../lib-components.scss'],
})
export class Button {
    title = 'button'
    description = 'The Mozek Button is a versatile, high-performance component designed for clear user interactions. It offers a tactile, signal-driven experience with built-in support for multiple visual models, color palettes, and flexible layouts.'

    public responsive = inject(ResponsiveService);
    public doc = inject(DocService);
    screen = computed(() => this.responsive.breakpoint());

    models: MozButtonModel[] = ['fill', 'flavor', 'outline', 'text', 'tonal', 'elevated', 'glass'];
    colors = [ 'primary', 'secondary', 'success', 'warn', 'danger',]
    icons = ['home', 'settings', 'favorite', 'add', 'check_circle']

    openMap: Record<string, boolean> = {};
    openSource(key: string) {
        this.openMap[key] = !this.openMap[key];
    }
    isOpen(key: string): boolean {
        return !!this.openMap[key];
    }
}