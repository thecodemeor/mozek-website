import {
    Component,
    inject,
    computed,
    signal
} from '@angular/core';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { DocService } from 'src/app/services/doc.service';
import { MozButtonIcon, MozIcon } from 'mozek-angular';

@Component({
    selector: 'app-lib-tokens',
    standalone: true,
    imports: [
        MozButtonIcon,
        MozIcon,
    ],
    templateUrl: './lib-tokens.html',
    styleUrl: './lib-tokens.scss',
})
export class LibTokens {
    public responsive = inject(ResponsiveService);
    public doc = inject(DocService);
    screen = computed(() => this.responsive.breakpoint());

    copiedId = signal<string | null>(null);

    copy(id: string, text: string) {
        this.doc.copy(text);
        this.copiedId.set(id);
        setTimeout(() => {
            if (this.copiedId() === id) {
                this.copiedId.set(null);
            }
        }, 2000);
    }
}