import {
    Component,
    inject,
    computed
} from '@angular/core';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { MozButtonIcon, MozIcon, MozCard } from 'mozek-angular';

@Component({
    selector: 'app-get-started',
    standalone: true,
    imports: [
        MozButtonIcon,
        MozIcon,
        MozCard
    ],
    templateUrl: './get-started.html',
    styleUrl: './get-started.scss',
})
export class GetStarted {
    public responsive = inject(ResponsiveService);
    screen = computed(() => this.responsive.breakpoint());

    copied: Record<string, boolean> = {};
    private resetTimer?: number;
    copyText(el: HTMLElement, tag: string) {
        navigator.clipboard.writeText(el.innerText.trim());
        this.copied[tag] = true;

        if (this.resetTimer) {
            clearTimeout(this.resetTimer);
        }

        this.resetTimer = window.setTimeout(() => {
            this.copied[tag] = false;
        }, 2000);
    }

    textCopied(tag: string) {
        return !!this.copied[tag];
    }
}