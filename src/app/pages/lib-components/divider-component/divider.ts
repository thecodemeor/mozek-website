import {
  Component,
  inject,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MozIcon, MozDivider } from 'mozek-angular';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { MozekCode } from 'src/app/assets/components/codesample';

type MozColorName =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warn'
  | 'danger';

/**
 * DividerComponent
 *
 * A reusable page component to document and display the MozDivider library component.
 *
 * @example
 * <moz-divider></moz-divider>
 */
@Component({
  selector: 'app-lib-component',
  standalone: true,
  imports: [CommonModule, MozekCode, MozIcon, MozDivider],
  templateUrl: './divider.html',
  styleUrls: ['./divider.scss', '../lib-components.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerComponent {
  title = 'divider';
  descripition =
    'The Mozek Divider component provides a visual separator between sections of content. It supports various styling options, including different thicknesses, colors, and orientations. The component is designed to be responsive and accessible, ensuring a consistent look and feel across devices and for all users.';

  public responsive = inject(ResponsiveService);
  screen = computed(() => this.responsive.breakpoint());

  colors: MozColorName[] = [
    'primary',
    'secondary',
    'success',
    'warn',
    'danger',
  ];

  openMap: Record<string, boolean> = {};
  openSource(key: string) {
    this.openMap[key] = !this.openMap[key];
  }
  isOpen(key: string): boolean {
    return !!this.openMap[key];
  }
}
