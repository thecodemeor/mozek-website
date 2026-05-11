import {
  Component,
  inject,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MozButton, MozIcon } from 'mozek-angular';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { MozekCode } from 'src/app/assets/components/codesample';

type MozButtonModel =
  | 'fill'
  | 'outline'
  | 'tonal'
  | 'elevated'
  | 'flavor'
  | 'glass'
  | 'text';

type MozButtonColor = 'primary' | 'secondary' | 'success' | 'warn' | 'danger';

/**
 * ButtonComponent
 *
 * A reusable page component to document and display the MozButton library component.
 * The MozButton component supports multiple variants and sizes.
 *
 * @example
 * <moz-button model="fill" color="primary" (click)="onSubmit()">
 *   Submit
 * </moz-button>
 *
 * @input model - 'fill' | 'flavor' | 'outline' | 'text' | 'tonal' | 'elevated' | 'glass' (default: 'fill')
 * @input color - 'primary' | 'secondary' | 'success' | 'warn' | 'danger' (default: 'primary')
 * @input disabled - boolean (default: false)
 * @input full - boolean (default: false)
 * @output click - MouseEvent
 */
@Component({
  selector: 'app-lib-component',
  standalone: true,
  imports: [CommonModule, MozButton, MozIcon, MozekCode],
  templateUrl: './button.html',
  styleUrls: ['./button.scss', '../lib-components.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  title: string = 'button';
  description: string =
    'A button is a clickable element that triggers an action or event. It supports multiple styles (fill, outline, text, etc.), colors (primary, secondary, success, etc.), and can be disabled or have full width.';

  public responsive = inject(ResponsiveService);
  screen = computed(() => this.responsive.breakpoint());

  models: MozButtonModel[] = [
    'fill',
    'flavor',
    'outline',
    'text',
    'tonal',
    'elevated',
    'glass',
  ];
  colors: MozButtonColor[] = [
    'primary',
    'secondary',
    'success',
    'warn',
    'danger',
  ];

  openMap: Record<string, boolean> = {};

  openSource(key: string): void {
    this.openMap[key] = !this.openMap[key];
  }

  isOpen(key: string): boolean {
    return !!this.openMap[key];
  }
}
