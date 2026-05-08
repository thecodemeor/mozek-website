import {
  Component,
  inject,
  AfterViewInit,
  OnDestroy,
  computed,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Router } from '@angular/router';

import updates from 'src/app/assets/documents/updates.json'

import { ResponsiveService } from 'src/app/services/responsive.service';
import { MozCard, MozCardBody, MozButton } from 'mozek-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MozCard, MozCardBody, MozButton],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home implements AfterViewInit, OnDestroy {
  private readonly router = inject(Router);
  
  public responsive = inject(ResponsiveService);
  screen = computed(() => this.responsive.breakpoint());

  @ViewChild('box1') box1!: ElementRef<HTMLDivElement>;
  @ViewChild('box2') box2!: ElementRef<HTMLDivElement>;
  heightPx = '60dvh';
  private ro?: ResizeObserver;
  private rafId: number | null = null;

  private scheduleUpdate() {
    if (this.rafId != null) cancelAnimationFrame(this.rafId);

    this.rafId = requestAnimationFrame(() => {
      this.rafId = requestAnimationFrame(() => {
        const h1 = this.box1.nativeElement.getBoundingClientRect().height ?? 0;
        const h2 = this.box2.nativeElement.getBoundingClientRect().height ?? 0;
        this.heightPx = `${h1 + h2}px`;
      });
    });
  }

  versionUpdates = [...updates].reverse();
  ngAfterViewInit(): void {
    this.scheduleUpdate();

    this.ro = new ResizeObserver(() => this.scheduleUpdate());
    this.ro.observe(this.box1.nativeElement);
    this.ro.observe(this.box2.nativeElement);

    window.addEventListener('load', () => this.scheduleUpdate(), { once: true });
  }

  ngOnDestroy(): void {
    if (this.rafId != null) cancelAnimationFrame(this.rafId);
    this.ro?.disconnect();
  }

  provided = [
    'Performance: Fine-grained reactivity ensures only what changes, updates.',
    'Simplicity: No more async pipes for simple state management.',
    'Developer Experience: Intuitive API designed specifically for Angular 18+.',
  ];

  features = [
    {
      name: 'Deep Dive: Core Concepts',
      img: 'assets/images/components-image.svg',
      url: 'core-concepts'
    },
    {
      name: 'Component Reference',
      img: 'assets/images/color-palette-image.svg',
      url: 'components'
    },
  ]

  navigateTo(route: string) {
    if (route.startsWith('http')) {
      window.open(route, '_blank');
      return;
    }
    this.router.navigateByUrl(route.startsWith('/') ? route : `/${route}`);
  }
}