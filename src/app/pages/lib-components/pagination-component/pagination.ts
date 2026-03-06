import {
    Component,
    inject,
    computed
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MozIcon, MozPagination, MozCard, MozPageChangeEvent } from 'mozek-angular';

import { ResponsiveService } from 'src/app/services/responsive.service';

@Component({
    selector: 'app-lib-component',
    imports: [
    CommonModule,
    MozIcon,
    MozPagination,
    MozCard
],
    templateUrl: './pagination.html',
    styleUrls: ['./pagination.scss', '../lib-components.scss'],
})
export class Pagination {
    title = 'pagination';
    descripition = 'The Mozek Pagination component provides a user-friendly interface for navigating through large sets of data or content. It allows users to easily switch between different pages of information, improving the overall user experience. The component is designed to be responsive and customizable, making it suitable for various applications and screen sizes.';

    public responsive = inject(ResponsiveService);
    screen = computed(() => this.responsive.breakpoint());

    pageIndex = 0;
    pageSize = 4;
    items = Array.from({ length: 20 }).map((_, i) => `Item ${i + 1}`);
    onPageChange(event: MozPageChangeEvent) {
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
    }

    get pagedItems() {
        const start = this.pageIndex * this.pageSize;
        return this.items.slice(start, start + this.pageSize);
    }

    openMap: Record<string, boolean> = {};
    openSource(key: string) {
        this.openMap[key] = !this.openMap[key];
    }
    isOpen(key: string): boolean {
        return !!this.openMap[key];
    }
}