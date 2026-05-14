import {
    Component,
    inject,
    computed
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MozSnackbarQueueService, MozButton, MozIcon, MozSnackbarQueueType } from 'mozek-angular';

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
    templateUrl: './snackbar-queue.html',
    styleUrls: ['./snackbar-queue.scss', '../lib-components.scss'],
    standalone: true
})
export class SnackbarQueue {
    title = 'snackbar queue'
    description = 'The Mozek Snackbar Queue component allows for multiple snackbars to be displayed simultaneously in a stack. It is ideal for high-traffic applications where multiple notifications might occur in rapid succession.'

    public responsive = inject(ResponsiveService);
    public doc = inject(DocService);
    public snackbarQueueService = inject(MozSnackbarQueueService);
    screen = computed(() => this.responsive.breakpoint());

    types: MozSnackbarQueueType[] = ['info', 'success', 'warning', 'error'];

    showBasic(message: string) {
        this.snackbarQueueService.show(message);
    }

    showWithType(message: string, type: MozSnackbarQueueType) {
        this.snackbarQueueService.show(message, type);
    }

    openMap: Record<string, boolean> = {};
    openSource(key: string) {
        this.openMap[key] = !this.openMap[key];
    }
    isOpen(key: string): boolean {
        return !!this.openMap[key];
    }
}
