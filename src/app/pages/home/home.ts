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
    'Mozek UI components, built specifically for Angular',
    'A flexible theme color system',
    'Design tokens and handy utility classes',
    'Free to use, for everyone',
  ];

  features = [
    {
      name: 'Components',
      img: 'assets/images/components-image.svg',
      url: 'components'
    },
    {
      name: 'Color Palette',
      img: 'assets/images/color-palette-image.svg',
      url: 'themes'
    },
    {
      name: 'Icons',
      img: 'assets/images/icon-image.svg',
      url: 'icons'
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