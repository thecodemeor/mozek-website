import {
    Component,
    inject,
    computed,
    Inject
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MozDialogService, MozDialogRef, MozButton, MozIcon } from 'mozek-angular';

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
    templateUrl: './dialog.html',
    styleUrls: ['./dialog.scss', '../lib-components.scss'],
    standalone: true
})
export class Dialog {
    title = 'dialog'
    description = 'The Mozek Dialog component provides a flexible way to display modal windows. It is service-based, allowing you to open components or templates dynamically with configurable options like width, data passing, and closing behavior.'

    public responsive = inject(ResponsiveService);
    public doc = inject(DocService);
    public dialogService = inject(MozDialogService);
    screen = computed(() => this.responsive.breakpoint());

    openBasicDialog() {
        this.dialogService.open(DialogBasicContent, {
            width: '400px'
        });
    }

    dialogResult = '';
    
    openDataDialog() {
        const dialogRef = this.dialogService.open(DialogDataContent, {
            width: '500px',
            data: { message: 'Hello from Doc!' },
            disableClose: true
        });

        dialogRef.afterClosed().subscribe((result: any) => {
            if (result) {
                this.dialogResult = result;
            }
        });
    }

    openMap: Record<string, boolean> = {};
    openSource(key: string) {
        this.openMap[key] = !this.openMap[key];
    }
    isOpen(key: string): boolean {
        return !!this.openMap[key];
    }
}

@Component({
    selector: 'app-dialog-basic-content',
    standalone: true,
    imports: [MozButton],
    template: `
        <div>
            <h2 class="text-xl font-bold mb-4">Dialog Content</h2>
            <p class="mb-6">This is a sample dialog opened via the MozDialogService. You can pass any component or template to be displayed here.</p>
            <div class="flex justify-end gap-2">
                <moz-button model="outline" (click)="close()">Close</moz-button>
                <moz-button (click)="close()">Done</moz-button>
            </div>
        </div>
    `
})
export class DialogBasicContent {
    public dialogRef = inject(MozDialogRef);
    close() {
        this.dialogRef.close();
    }
}

@Component({
    selector: 'app-dialog-data-content',
    standalone: true,
    imports: [MozButton],
    template: `
        <div>
            <h2 class="text-xl font-bold mb-4">Dialog Data</h2>
            <p class="mb-6">{{ config?.data?.message || 'No data provided.' }}</p>
            <div class="flex justify-end gap-2">
                <moz-button model="outline" (click)="close('Cancelled')">Close</moz-button>
                <moz-button (click)="close('Done')">Done</moz-button>
            </div>
        </div>
    `
})
export class DialogDataContent {
    public dialogRef = inject(MozDialogRef);
    constructor(@Inject('MozDialogConfig') public config: any) {}
    
    close(result?: string) {
        this.dialogRef.close(result);
    }
}