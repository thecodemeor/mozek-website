import {
    Component,
    inject,
    computed
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MozBreadcrumbs, MozIcon } from 'mozek-angular';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { DocService } from 'src/app/services/doc.service';
import { MozekCode } from "src/app/assets/components/codesample";
import { MozekDividerFileCode } from "src/app/assets/components/codedividersample";

@Component({
    selector: 'app-lib-component',
    imports: [
        CommonModule,
        MozBreadcrumbs,
        MozIcon,
        MozekCode,
        MozekDividerFileCode
    ],
    templateUrl: './breadcrumbs.html',
    styleUrls: ['./breadcrumbs.scss', '../lib-components.scss'],
    standalone: true
})
export class Breadcrumbs {
    title = 'breadcrumbs'
    description = 'The Mozek Breadcrumbs component provides a clear navigation path for users within complex application structures. It automatically handles responsive behavior, including an intelligent auto-collapsing mechanism for deep hierarchies.'

    public responsive = inject(ResponsiveService);
    public doc = inject(DocService);
    screen = computed(() => this.responsive.breakpoint());

    basicItems = [
        { label: 'Home', icon: 'home', url: '/' },
        { label: 'Library', icon: 'book', url: '/components' },
        { label: 'Breadcrumbs', icon: 'layers', url: '/components/breadcrumbs' }
    ];

    collapsedItems = [
        { label: 'Home', icon: 'home' },
        { label: 'Project', icon: 'folder_1' },
        { label: 'Friend', icon: 'friend' },
        { label: 'Group', icon: 'group' },
        { label: 'Assignment', icon: 'notebook' },
        { label: 'Page', icon: 'file_text' }
    ];

    openMap: Record<string, boolean> = {};
    openSource(key: string) {
        this.openMap[key] = !this.openMap[key];
    }
    isOpen(key: string): boolean {
        return !!this.openMap[key];
    }

    // Resize Logic
    isResizing = false;
    startX = 0;
    startWidth = 0;
    currentWidth = 0; // 0 means 100% initially
    minWidth = 200;
    maxWidth = 1200;

    startResize(event: MouseEvent) {
        this.isResizing = true;
        this.startX = event.clientX;
        
        const handle = event.target as HTMLElement;
        const container = handle.parentElement;
        const sampleBox = container?.parentElement;

        // Set maxWidth to the full inner width of the sample-box
        if (sampleBox) {
            this.maxWidth = sampleBox.clientWidth;
        }
        
        // If it's the first time resizing, get the actual width
        if (this.currentWidth === 0) {
            this.currentWidth = container ? container.offsetWidth : 600;
        }
        
        this.startWidth = this.currentWidth;
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
        
        const onMouseMove = (moveEvent: MouseEvent) => {
            if (!this.isResizing) return;
            const delta = moveEvent.clientX - this.startX;
            this.currentWidth = Math.min(this.maxWidth, Math.max(this.minWidth, this.startWidth + delta));
        };

        const onMouseUp = () => {
            this.isResizing = false;
            document.body.style.cursor = 'default';
            document.body.style.userSelect = 'auto';
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    }
}
