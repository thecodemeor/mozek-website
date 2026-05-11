import {
    Component,
    inject,
    computed,
    ChangeDetectionStrategy
} from '@angular/core';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { MozButtonIcon, MozIcon } from 'mozek-angular';

@Component({
    selector: 'app-get-started',
    standalone: true,
    imports: [
        MozButtonIcon,
        MozIcon
    ],
    templateUrl: './get-started.html',
    styleUrl: './get-started.scss',
    changeDetection: ChangeDetectionStrategy.Default // Needs default for the copy timeout change detection to work without manual trigger, but could be refactored to use signals if strictly needed. Leaving default as the copy text relies on basic ChangeDetection.
})
export class GetStarted {
    public responsive = inject(ResponsiveService);
    screen = computed(() => this.responsive.breakpoint());

    copied: Record<string, boolean> = {};
    private resetTimers: Record<string, number> = {};

    copyText(el: HTMLElement, tag: string): void {
        navigator.clipboard.writeText(el.innerText.trim());
        this.copied[tag] = true;

        if (this.resetTimers[tag]) {
            window.clearTimeout(this.resetTimers[tag]);
        }

        this.resetTimers[tag] = window.setTimeout(() => {
            this.copied[tag] = false;
        }, 2000);
    }

    textCopied(tag: string): boolean {
        return !!this.copied[tag];
    }
}
