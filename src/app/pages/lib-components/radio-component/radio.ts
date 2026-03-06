import {
    Component,
    inject,
    computed
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MozIcon, MozRadioGroup, MozRadio } from 'mozek-angular';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { MozekCode } from 'src/app/assets/components/codesample';

@Component({
    selector: 'app-lib-component',
    imports: [
    CommonModule,
    MozekCode,
    MozIcon,
    MozRadioGroup,
    MozRadio
],
    templateUrl: './radio.html',
    styleUrls: ['./radio.scss', '../lib-components.scss'],
})
export class Radio {
    title = 'radio';
    descripition = 'The Mozek Radio component allows users to select one option from a set of predefined choices. It is designed to be intuitive and easy to use, providing a clear visual indication of the selected option. The component supports various configurations, including different orientations (horizontal or vertical) and customizable styles, making it versatile for use in forms, surveys, and other interactive interfaces.';

    public responsive = inject(ResponsiveService);
    screen = computed(() => this.responsive.breakpoint());

    ready = false
    ngOnInit() {
        this.ready = true;
    }
    moon: string = 'cresent'
    planet: string = 'earth'
    alien: string = 'zuzu'
    property: string = 'condominium'

    openMap: Record<string, boolean> = {};
    openSource(key: string) {
        this.openMap[key] = !this.openMap[key];
    }
    isOpen(key: string): boolean {
        return !!this.openMap[key];
    }
}