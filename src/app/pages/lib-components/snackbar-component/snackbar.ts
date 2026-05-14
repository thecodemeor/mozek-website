import {
    Component,
    inject,
    computed
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MozSnackbarService, MozButton, MozIcon, MozSnackbarType, MozSnackbarPosition } from 'mozek-angular';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { DocService } from 'src/app/services/doc.service';
import { MozekCode } from "src/app/assets/components/codesample";
import { MozekDividerFileCode } from "src/app/assets/components/codedividersample";

@Component({
    selector: 'app-lib-component',
    imports: [
        CommonModule,
        MozButton,
        MozIcon,
        MozekCode,
        MozekDividerFileCode
    ],
    templateUrl: './snackbar.html',
    styleUrls: ['./snackbar.scss', '../lib-components.scss'],
    standalone: true
})
export class Snackbar {
    title = 'snackbar'
    description = 'The Mozek Snackbar component provides brief, non-intrusive feedback about an operation. It can be easily triggered via the MozSnackbarService and supports multiple status types and corner positions.'

    public responsive = inject(ResponsiveService);
    public doc = inject(DocService);
    public snackbarService = inject(MozSnackbarService);
    screen = computed(() => this.responsive.breakpoint());

    types: MozSnackbarType[] = ['info', 'success', 'warning', 'error'];
    positions: MozSnackbarPosition[] = ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'];
    topPositions: MozSnackbarPosition[] = ['top-left', 'top-center', 'top-right'];
    bottomPositions: MozSnackbarPosition[] = ['bottom-left', 'bottom-center', 'bottom-right'];

    showBasic(message: string) {
        this.snackbarService.show(message);
    }

    showWithType(message: string, type: MozSnackbarType) {
        this.snackbarService.show(message, type);
    }

    showAtPosition(message: string, position: MozSnackbarPosition) {
        this.snackbarService.show(message, 'info', position);
    }

    openMap: Record<string, boolean> = {};
    openSource(key: string) {
        this.openMap[key] = !this.openMap[key];
    }
    isOpen(key: string): boolean {
        return !!this.openMap[key];
    }
}
