import {
    Component,
    inject,
    computed
} from '@angular/core';

import { ResponsiveService } from 'src/app/services/responsive.service';
import colorPalette from 'src/app/pages/lib-themes/color-palette.json';

@Component({
    selector: 'app-lib-themes',
    standalone: true,
    imports: [
    ],
    templateUrl: './lib-themes.html',
    styleUrl: './lib-themes.scss',
})
export class LibThemes {
    public responsive = inject(ResponsiveService);
    screen = computed(() => this.responsive.breakpoint());

    hues = [ '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];
    themes = Object.keys(colorPalette);
    colorPalette(theme: string, hue: string) {
        const color = theme as keyof typeof colorPalette;
        const hueKey = hue as keyof typeof colorPalette[typeof color];
        return colorPalette[color][hueKey];
    };

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