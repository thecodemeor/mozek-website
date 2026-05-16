import {
    Component,
    inject,
    computed,
    signal
} from '@angular/core';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { DocService } from 'src/app/services/doc.service';
import colorPalette from 'src/app/pages/lib-themes/color-palette.json';
import { MozButtonIcon, MozIcon } from 'mozek-angular';

@Component({
    selector: 'app-lib-themes',
    standalone: true,
    imports: [
        MozButtonIcon,
        MozIcon,
    ],
    templateUrl: './lib-themes.html',
    styleUrl: './lib-themes.scss',
})
export class LibThemes {
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

    hues = [ '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];
    themes = Object.keys(colorPalette);
    colorPalette(theme: string, hue: string) {
        const color = theme as keyof typeof colorPalette;
        const hueKey = hue as keyof typeof colorPalette[typeof color];
        return colorPalette[color][hueKey];
    };

}