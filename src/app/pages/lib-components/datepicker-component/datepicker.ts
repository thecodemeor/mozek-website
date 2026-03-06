import {
    Component,
    inject,
    computed
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MozIcon, MozDatepicker } from 'mozek-angular';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { MozekCode } from 'src/app/assets/components/codesample';

type MozDatepickerModel =
    | 'fill'
    | 'outline';

@Component({
    selector: 'app-lib-component',
    imports: [
    CommonModule,
    MozekCode,
    MozIcon,
    MozDatepicker
],
    templateUrl: './datepicker.html',
    styleUrls: ['./datepicker.scss', '../lib-components.scss'],
})
export class Datepicker {
    title = 'datepicker';
    descripition = 'The Mozek Datepicker component provides a user-friendly interface for selecting dates. It offers various customization options, including different display formats, date ranges, and localization support. The component is designed to be responsive and accessible, ensuring a seamless experience across devices and for all users.';

    public responsive = inject(ResponsiveService);
    screen = computed(() => this.responsive.breakpoint());

    models: MozDatepickerModel[] = ['outline', 'fill'];
    datepickerValue: Date | null = null;

    openMap: Record<string, boolean> = {};
    openSource(key: string) {
        this.openMap[key] = !this.openMap[key];
    }
    isOpen(key: string): boolean {
        return !!this.openMap[key];
    }
}