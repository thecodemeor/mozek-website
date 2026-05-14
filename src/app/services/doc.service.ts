import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DocService {
    public copied = signal(false);

    async copy(text: string) {
        try {
            await navigator.clipboard.writeText(text);
            this.copied.set(true);
            setTimeout(() => this.copied.set(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }
}
