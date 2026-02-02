import {
    Component,
    inject,
    computed
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { MozButton, MozIcon } from 'mozek-angular';

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
        MozIcon
    ],
    templateUrl: './button.html',
    styleUrls: ['./button.scss', '../lib-components.scss'],
})
export class Button {
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