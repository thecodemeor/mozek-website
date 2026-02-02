import { 
    Component,
    ChangeDetectionStrategy,
    Input,
    HostListener,
    ElementRef,
    Renderer2,
    inject,
    HostBinding,
    booleanAttribute
} from '@angular/core';

@Component({
    selector: 'mozek-button',
    template: `
        <ng-content></ng-content>
        <span class="buttonRipple"></span>
    `,
    styles: `
        :host {
            position: relative;
            width: fit-content; height: 100%;
            font-size: 1rem;
            border: none;
            border-radius: var(--moz-radius-pill);
            overflow: hidden;
            cursor: pointer;

            /* Fill */
            &.moz-btn--fill {
                background: var(--moz-btn-bg, var(--moz-color-primary));
                color: white;
                border: none;
                &:hover:not(:disabled) { background: color-mix(in srgb, var(--moz-btn-bg, var(--moz-color-primary)) 60%, var(--moz-color-background));}
            }
    
            /* Flavor */
            &.moz-btn--flavor {
                background: color-mix(in srgb, var(--moz-btn-bg, var(--moz-color-primary)) 10%, var(--moz-color-background));
                color: var(--moz-color-text);
                border: solid 0.1rem var(--moz-btn-bg-lite, var(--moz-color-primary-lite));
                &:hover:not(:disabled) { background: var(--moz-btn-bg-lite, var(--moz-color-primary-lite));}
            }

            &.moz-btn-grey {
                --moz-btn-bg: #96aebe;
                --moz-btn-bg-lite: #dbe6ea;
            }
    
            /* ---------------------------
            Ripple Effect
            --------------------------- */
            .buttonRipple {
                position: absolute;
                top: 0; left: 0;
                width: 100%; height: 100%;
                border-radius: inherit;
                overflow: hidden;
            }
            .ripple {
                position: absolute;
                border-radius: 50%;
                opacity: .3;
                transform: scale(0);
                pointer-events: none;
                z-index: 2;
                animation: ripple 0.6s linear forwards;
            }
            @keyframes ripple { to { transform: scale(4); opacity: 0;}}
    
            @media (prefers-reduced-motion: reduce) {
                .ripple { animation-duration: 0.001s;}
                button.moz-button:active { transform: none;}
            }
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MozekButton {
    private readonly el = inject(ElementRef<HTMLElement>);
    private readonly renderer = inject(Renderer2);

    @Input() model: 'fill' | 'flavor' = 'fill';
    @Input() color: 'primary' | 'secondary' | 'grey' = 'primary';
    @Input({ transform: booleanAttribute }) icon = false;

    @HostBinding('class')
    get hostClasses(): string {
        let colorclass = '';
        if (this.color === 'grey') {
            colorclass = 'moz-btn-grey';
        }
        return [`moz-btn--${this.model}`, colorclass].join(' ');
    }

    @HostBinding('style.padding')
    get hostWidth(): string {
        return this.icon ? '0.3rem' : 'var(--moz-space-1) var(--moz-space-3)';
    }

    get btnColor(): string {
        return `var(--moz-color-${this.color})`
    }

    @HostListener('click', ['$event'])
    onClick(e: MouseEvent): void { this.spawnRipple(e);}

    private spawnRipple(event: MouseEvent): void {
        const button = this.el.nativeElement.querySelector('.buttonRipple') as HTMLElement | null;
        if (!button) return;

        // remove old ripples
        button
        .querySelectorAll('.ripple')
        .forEach((r) => this.renderer.removeChild(button, r));

        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const w = button.offsetWidth;
        const h = button.offsetHeight;

        const maxDim = Math.max(
            Math.hypot(x, y),
            Math.hypot(w - x, y),
            Math.hypot(x, h - y),
            Math.hypot(w - x, h - y)
        );
        const size = maxDim * 2;

        const ripple = this.renderer.createElement('span');
        this.renderer.addClass(ripple, 'ripple');
        this.renderer.setStyle(ripple, 'width', `${size}px`);
        this.renderer.setStyle(ripple, 'height', `${size}px`);
        this.renderer.setStyle(ripple, 'top', `${y - size / 2}px`);
        this.renderer.setStyle(ripple, 'left', `${x - size / 2}px`);
        this.renderer.setStyle(ripple, 'background', this.btnColor);
        this.renderer.appendChild(button, ripple);

        const off = this.renderer.listen(ripple, 'animationend', () => {
            off();
            this.renderer.removeChild(button, ripple);
        });
    }
}