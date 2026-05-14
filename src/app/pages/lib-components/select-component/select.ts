import {
    Component,
    inject,
    computed
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MozIcon, MozSelect, MozOption } from 'mozek-angular';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { DocService } from 'src/app/services/doc.service';
import { MozekCode } from 'src/app/assets/components/codesample';
import { MozekDividerFileCode } from "src/app/assets/components/codedividersample";

type MozInputModel =
    | 'outline'
    | 'fill'

@Component({
    selector: 'app-lib-component',
    imports: [
        CommonModule,
        FormsModule,
        MozekCode,
        MozIcon,
        MozSelect,
        MozOption,
        MozekDividerFileCode
    ],
    templateUrl: './select.html',
    styleUrls: ['./select.scss', '../lib-components.scss'],
})
export class Select {
    title = 'select';
    description = "The Mozek Select component provides a customizable dropdown menu for selecting options. It supports single and multiple selection modes, as well as various styling options to match your application's design. The component is designed to be responsive and accessible, ensuring a seamless user experience across different devices and for all users.";

    public responsive = inject(ResponsiveService);
    public doc = inject(DocService);
    screen = computed(() => this.responsive.breakpoint());

    selectedFruit: string = 'Apple';
    fruits: string[] = ['Apple', 'Banana', 'Orange', 'Grapes', 'Watermelon'];
    models: MozInputModel[] = ['outline', 'fill'];

    openMap: Record<string, boolean> = {};
    openSource(key: string) {
        this.openMap[key] = !this.openMap[key];
    }
    isOpen(key: string): boolean {
        return !!this.openMap[key];
    }
}