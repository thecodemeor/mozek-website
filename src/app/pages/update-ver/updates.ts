import {
    Component,
    inject,
    computed
} from '@angular/core';
import updates from 'src/app/assets/documents/updates.json'

import { ResponsiveService } from 'src/app/services/responsive.service';
import { MozCard } from 'mozek-angular';

@Component({
    selector: 'app-updates',
    standalone: true,
    imports: [ MozCard],
    templateUrl: './updates.html',
    styleUrl: './updates.scss',
})
export class Updates {
    public responsive = inject(ResponsiveService);
    screen = computed(() => this.responsive.breakpoint());

    versionUpdates = [...updates].reverse();
}