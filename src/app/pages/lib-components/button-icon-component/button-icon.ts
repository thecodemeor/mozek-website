import {
    Component,
    inject,
    computed
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MozButtonIcon, MozIcon } from 'mozek-angular';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { MozekCode } from 'src/app/assets/components/codesample';

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
        MozekCode,
        MozButtonIcon,
        MozIcon
    ],
    templateUrl: './button-icon.html',
    styleUrls: ['./button-icon.scss', '../lib-components.scss'],
})
export class ButtonIcon {
    title = 'button-icon'
    description = 'A button icon is a compact button that displays only an icon, often used in toolbars or navigation menus. It supports multiple models (text, tonal) and colors (primary, secondary, success, etc.).'
    
    public responsive = inject(ResponsiveService);
    screen = computed(() => this.responsive.breakpoint());

    models: MozButtonIconModel[] = ['text', 'tonal'];
    colors: MozColorName[] = [ 'primary', 'secondary', 'success', 'warn', 'danger']

    retitle(title: string) {
        return title.replace(/-/g, ' ');
    }

    openMap: Record<string, boolean> = {};
    openSource(key: string) {
        this.openMap[key] = !this.openMap[key];
    }
    isOpen(key: string): boolean {
        return !!this.openMap[key];
    }
}