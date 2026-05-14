import {
    Component,
    inject,
    computed,
    ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MozTutor, MozTutorTrigger, MozButton, MozIcon, MozCard, MozCardBody, MozCardMedia } from 'mozek-angular';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { DocService } from 'src/app/services/doc.service';
import { MozekDividerFileCode } from "src/app/assets/components/codedividersample";

@Component({
    selector: 'app-lib-component',
    imports: [
    CommonModule,
    MozTutor,
    MozTutorTrigger,
    MozButton,
    MozIcon,
    MozekDividerFileCode,
    MozCard,
    MozCardBody,
    MozCardMedia
],
    templateUrl: './tutor.html',
    styleUrls: ['./tutor.scss', '../lib-components.scss'],
    standalone: true
})
export class Tutor {
    title = 'tutor'
    description = 'The Mozek Tutor component facilitates guided onboarding tours. It uses an overlay mechanism to highlight specific elements and display contextual instructions, helping users learn your application features.'

    public responsive = inject(ResponsiveService);
    public doc = inject(DocService);
    screen = computed(() => this.responsive.breakpoint());

    @ViewChild('tutorialTrigger') tutorialTrigger!: MozTutorTrigger;

    startTutorial() {
        this.tutorialTrigger.open();
    }

    openMap: Record<string, boolean> = {};
    openSource(key: string) {
        this.openMap[key] = !this.openMap[key];
    }
    isOpen(key: string): boolean {
        return !!this.openMap[key];
    }
}
