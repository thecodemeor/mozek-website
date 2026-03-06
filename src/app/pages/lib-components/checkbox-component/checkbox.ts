import {
    Component,
    inject,
    computed,
    Input,
    booleanAttribute
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MozCheckboxGroup, MozCheckbox, MozIcon } from 'mozek-angular';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { MozekCode } from "src/app/assets/components/codesample";

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
    MozCheckboxGroup,
    MozCheckbox,
    MozIcon,
    MozekCode
],
    templateUrl: './checkbox.html',
    styleUrls: ['./checkbox.scss', '../lib-components.scss'],
})
export class Checkbox {
    title = 'checkbox'
    description = 'The checkbox component allows users to select one or more options from a set. It can be used in forms, settings, and anywhere multiple selections are needed. The component supports various states, colors, and groupings for enhanced user interaction and visual appeal.'

    public responsive = inject(ResponsiveService);
    screen = computed(() => this.responsive.breakpoint());

    ready = false
    ngOnInit() {
        this.ready = true;
    }

    checked = false;
    colors: MozColorName[] = [ 'primary', 'secondary', 'success', 'warn', 'danger',]
    food1 = false;
    food2 = false;
    food3 = false;

    openMap: Record<string, boolean> = {};
    openSource(key: string) {
        this.openMap[key] = !this.openMap[key];
    }
    isOpen(key: string): boolean {
        return !!this.openMap[key];
    }
}