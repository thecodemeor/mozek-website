import {
    Component,
    inject,
    computed
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MozIcon, MozInput } from 'mozek-angular';

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
        MozInput,
        MozekDividerFileCode
    ],
    templateUrl: './input.html',
    styleUrls: ['./input.scss', '../lib-components.scss'],
})
export class Input {
    title = 'input';
    description = 'The Mozek Input component is a versatile form control that allows users to enter and edit text. It supports various input types, including text, password, email, and more. The component is designed with accessibility in mind, providing features such as labels, placeholders, and error messages to enhance the user experience. Additionally, it offers customization options for styling and validation, making it a flexible choice for any form design.';

    public responsive = inject(ResponsiveService);
    public doc = inject(DocService);
    screen = computed(() => this.responsive.breakpoint());

    models: MozInputModel[] = ['outline', 'fill'];
    textInput: string = 'Mozek Input Text Here'

    openMap: Record<string, boolean> = {};
    openSource(key: string) {
        this.openMap[key] = !this.openMap[key];
    }
    isOpen(key: string): boolean {
        return !!this.openMap[key];
    }
}