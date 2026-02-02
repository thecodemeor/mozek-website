import {
    Component,
    inject,
    computed
} from '@angular/core';

import { ResponsiveService } from 'src/app/services/responsive.service';
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
    screen = computed(() => this.responsive.breakpoint());

    copied = false;
    private resetTimer?: number;
    copyText(el: HTMLElement) {
        navigator.clipboard.writeText(el.innerText.trim());
        this.copied = true;

        if (this.resetTimer) {
            clearTimeout(this.resetTimer);
        }

        this.resetTimer = window.setTimeout(() => {
            this.copied = false;
        }, 2000);
    }
}