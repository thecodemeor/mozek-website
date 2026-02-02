import {
    Component,
    inject,
    computed
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { MozCard, MozCardBody, MozCardHeader, MozCardMedia, MozCardFooter, MozIcon } from 'mozek-angular';

type MozCardModel =
    | 'fill'
    | 'outline'
    | 'flavor'
    | 'glass'
    | 'elevated'

@Component({
    selector: 'app-lib-component',
    imports: [
        CommonModule,
        MozCard, MozCardBody, MozCardHeader, MozCardMedia, MozCardFooter,
        MozIcon
    ],
    templateUrl: './card.html',
    styleUrls: ['./card.scss', '../lib-components.scss'],
})
export class Card {
    public responsive = inject(ResponsiveService);
    screen = computed(() => this.responsive.breakpoint());

    models: MozCardModel[] = ['fill', 'flavor', 'outline', 'glass', 'elevated'];
    models1: MozCardModel[] = ['fill', 'flavor', 'outline'];
    models2: MozCardModel[] = ['glass', 'elevated'];
    colors = [ 'primary', 'secondary', 'success', 'warn', 'danger',]

    openMap: Record<string, boolean> = {};
    openSource(key: string) {
        this.openMap[key] = !this.openMap[key];
    }
    isOpen(key: string): boolean {
        return !!this.openMap[key];
    }
}