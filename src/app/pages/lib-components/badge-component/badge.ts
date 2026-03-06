import {
    Component,
    inject,
    computed
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MozBadge, MozButton, MozIcon } from 'mozek-angular';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { MozekCode } from "src/app/assets/components/codesample";

@Component({
    selector: 'app-lib-component',
    imports: [
        CommonModule,
        MozekCode,
        MozBadge,
        MozButton,
        MozIcon
    ],
    templateUrl: './badge.html',
    styleUrls: ['./badge.scss', '../lib-components.scss'],
})
export class Badge {
    title = 'badge'
    description = 'A badge is a small component that displays a number or status indicator, often used to show notifications or highlight important information.'

    public responsive = inject(ResponsiveService);
    screen = computed(() => this.responsive.breakpoint());

    badges: any[] = [
        { color: 'primary', number: '1', icon: 'check'},
        { color: 'secondary', number: '10', icon: 'pending'},
        { color: 'success', number: '100', icon: 'check'},
        { color: 'warn', number: '', icon: 'alert'},
        { color: 'danger', number: '-1000', icon: 'cancel'}
    ]

    badgextra: any[] = [
        { color: 'primary', label: 'Primary', icon: 'check', dot: true, pulse: false},
        { color: 'secondary', label: '1', icon: '', dot: false, pulse: true},
        { color: 'success', label: 'Success', icon: 'check', dot: false, pulse: true},
        { color: 'danger', label: 'Danger', icon: 'cancel', dot: true, pulse: true}
    ]

    openMap: Record<string, boolean> = {};
    openSource(key: string) {
        this.openMap[key] = !this.openMap[key];
    }
    isOpen(key: string): boolean {
        return !!this.openMap[key];
    }
}