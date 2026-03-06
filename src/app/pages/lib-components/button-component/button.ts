import {
    Component,
    inject,
    computed
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MozButton, MozIcon } from 'mozek-angular';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { MozekCode } from "src/app/assets/components/codesample";

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
    MozekCode
],
    templateUrl: './button.html',
    styleUrls: ['./button.scss', '../lib-components.scss'],
})
export class Button {
    title = 'button'
    description = 'A button is a clickable element that triggers an action or event. It supports multiple styles (fill, outline, text, etc.), colors (primary, secondary, success, etc.), and can be disabled or have icons.'

    public responsive = inject(ResponsiveService);
    screen = computed(() => this.responsive.breakpoint());

    models: MozButtonModel[] = ['fill', 'flavor', 'outline', 'text', 'tonal', 'elevated', 'glass'];
    colors = [ 'primary', 'secondary', 'success', 'warn', 'danger',]

    openMap: Record<string, boolean> = {};
    openSource(key: string) {
        this.openMap[key] = !this.openMap[key];
    }
    isOpen(key: string): boolean {
        return !!this.openMap[key];
    }
}