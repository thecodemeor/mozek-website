import { Component, computed, inject, signal, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ResponsiveService } from 'src/app/services/responsive.service';
import { MozekButton } from 'src/app/assets/components/button';

import {
  MozCard, MozCardHeader, MozCardBody,
  MozSwitch 
} from 'mozek-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,

    MozekButton,

    MozCard,
    MozCardHeader,
    MozCardBody
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  @ViewChild('navmenu') navmenu?: ElementRef<HTMLElement>;

  protected readonly title = signal('mozek');

  private readonly responsive = inject(ResponsiveService);
  private readonly router = inject(Router);

  readonly screen = computed(() => this.responsive.breakpoint());
  readonly navtab = ['home', 'installation', 'core-concepts', 'components'] ;
  readonly landingpage = [
    { 
      title: 'Mozek Learning Hub',
      link: [
        { name: 'Module 1: Installation', url: 'installation' },
        { name: 'Module 2: Core Concepts', url: 'core-concepts'},
        { name: 'Updates', url: 'updates'}
      ]
    },
    { 
      title: 'Component Reference',
      link: [
        { name: 'Module 3: Components', url: 'components'},
        { name: 'Icons', url: 'icons'},
        { name: 'Module 5: Themes', url: 'themes'},
        { name: 'Module 4: Utilities', url: 'utilities'},
        { name: 'Module 4: Tokens', url: 'tokens'}
      ]
    },
    { 
      title: 'Community',
      link: [
        { name: 'GitHub', url: 'https://github.com/thecodemeor/mozek-package' }
      ]
    },
  ];

  navigateTo(route: string) {
    if (route.startsWith('http')) {
      window.open(route, '_blank');
      return;
    }
    this.router.navigateByUrl(route.startsWith('/') ? route : `/${route}`);
  }

  menunavbar: boolean = false
  openMenu() { this.menunavbar = true;}
  closeMenu() { this.menunavbar = false;}

  @HostListener('document:mousedown', ['$event'])
  onDocMouseDown(event: MouseEvent) {
    if (!this.menunavbar) return;

    const menuEl = this.navmenu?.nativeElement;
    const target = event.target as Node;

    if (menuEl?.contains(target)) return;

    const trigger = document.querySelector('.menu-trigger');
    if (trigger?.contains(target)) return;

    this.closeMenu();
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.menunavbar) this.closeMenu();
  }

  removeFooter(): boolean {
    const currentUrl = this.router.url;
    return currentUrl.includes('/components');
  }
}