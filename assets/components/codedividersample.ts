import { Component, Input } from '@angular/core';

@Component({
    selector: 'mozek-divider-file-code',
    standalone: true,
    template: `
        <img [src]="'assets/images/icon/' + fileType + '-logo.svg'" [alt]="fileType">
        <p>{{ fileType }}</p>
        <div class="line"></div>
    `,
    styles: `
        :host {
            display: flex;
            width: 100%; height: fit-content;
            padding: var(--moz-space-3) 0 var(--moz-space-1);
            gap: var(--moz-space-1);
            align-items: center;
            font-weight: 500;
                    
            img { width: 1rem; height: 1rem;}
            p {
                color: color-mix(in srgb, var(--moz-color-surface) 50%, transparent 50%);
                text-transform: capitalize;
                font-size: 0.7rem;
            }
            .line {
                flex: 1;
                width: 100%; height: 1px;
                margin: 0;
                background-color: color-mix(in srgb, var(--moz-color-surface) 50%, transparent 50%);
            }
        }
    `
})
export class MozekDividerFileCode {
    @Input() fileType = ''


}