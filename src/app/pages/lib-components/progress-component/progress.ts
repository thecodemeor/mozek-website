import {
  Component,
  inject,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MozIcon, MozProgress } from 'mozek-angular';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { MozekCode } from 'src/app/assets/components/codesample';

type MozProgressModel =
  | 'ring'
  | 'line_spinner'
  | 'hourglass'
  | 'zoomies'
  | 'line_wobble'
  | 'cardio'
  | 'helix'
  | 'newton'
  | 'mirage'
  | 'blank';

/**
 * ProgressComponent
 *
 * A reusable page component to document and display the MozProgress library component.
 *
 * @example
 * <moz-progress></moz-progress>
 */
@Component({
  selector: 'app-lib-component',
  standalone: true,
  imports: [CommonModule, MozekCode, MozIcon, MozProgress],
  templateUrl: './progress.html',
  styleUrls: ['./progress.scss', '../lib-components.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressComponent {
  title = 'progress';
  descripition =
    'The Mozek Progress component provides a visual representation of ongoing processes or tasks. It offers various styles and customization options, allowing developers to choose the most suitable design for their applications. The component is designed to be responsive and accessible, ensuring a seamless user experience across different devices and for all users.';

  public responsive = inject(ResponsiveService);
  screen = computed(() => this.responsive.breakpoint());

  models: MozProgressModel[] = [
    'ring',
    'line_spinner',
    'hourglass',
    'zoomies',
    'line_wobble',
    'cardio',
    'helix',
    'newton',
    'mirage',
    'blank',
  ];
  sizes: ('20' | '40' | '60' | '80' | '100')[] = [
    '20',
    '40',
    '60',
    '80',
    '100',
  ];
  speeds = ['0.5', '1', '1.5', '2', '4'];

  openMap: Record<string, boolean> = {};
  openSource(key: string) {
    this.openMap[key] = !this.openMap[key];
  }
  isOpen(key: string): boolean {
    return !!this.openMap[key];
  }
}
