import {
    Component,
    inject,
    computed
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { MozButtonIcon, MozIcon } from 'mozek-angular';

type MozButtonIconModel = 'tonal' | 'glass' | 'text';
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
        MozButtonIcon,
        MozIcon
    ],
    templateUrl: './button-icon.html',
    styleUrls: ['./button-icon.scss', '../lib-components.scss'],
})
export class ButtonIcon {
    public responsive = inject(ResponsiveService);
    screen = computed(() => this.responsive.breakpoint());

    models: MozButtonIconModel[] = ['text', 'tonal'];
    colors: MozColorName[] = [ 'primary', 'secondary', 'success', 'warn', 'danger',]

    openMap: Record<string, boolean> = {};
    openSource(key: string) {
        this.openMap[key] = !this.openMap[key];
    }
    isOpen(key: string): boolean {
        return !!this.openMap[key];
    }
}