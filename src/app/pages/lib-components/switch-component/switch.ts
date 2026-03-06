import {
    Component,
    inject,
    computed
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MozIcon, MozSwitch } from 'mozek-angular';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { MozekCode } from 'src/app/assets/components/codesample';

export type MozColorName =
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
    MozSwitch
],
    templateUrl: './switch.html',
    styleUrls: ['./switch.scss', '../lib-components.scss'],
})
export class Switch {
    title = 'switch';
    descripition = 'The Mozek Switch component is a versatile UI element that allows users to toggle between two states, such as on/off or enabled/disabled. It is designed with accessibility and responsiveness in mind, ensuring a seamless user experience across different devices and screen sizes. The switch can be customized with various colors and styles to fit the overall design of the application, making it an essential component for interactive interfaces.';

    public responsive = inject(ResponsiveService);
    screen = computed(() => this.responsive.breakpoint());

    colors: MozColorName[] = ['primary', 'secondary', 'success', 'warn', 'danger'];
    checked: boolean = false;

    openMap: Record<string, boolean> = {};
    openSource(key: string) {
        this.openMap[key] = !this.openMap[key];
    }
    isOpen(key: string): boolean {
        return !!this.openMap[key];
    }
}