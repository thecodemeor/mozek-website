import {
  Component,
  inject,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MozCard,
  MozCardBody,
  MozCardHeader,
  MozCardMedia,
  MozCardFooter,
  MozIcon,
} from 'mozek-angular';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { MozekCode } from 'src/app/assets/components/codesample';

type MozCardModel = 'fill' | 'outline' | 'flavor' | 'glass' | 'elevated';

/**
 * CardComponent
 *
 * A reusable page component to document and display the MozCard library component.
 *
 * @example
 * <moz-card></moz-card>
 */
@Component({
  selector: 'app-lib-component',
  standalone: true,
  imports: [
    CommonModule,
    MozekCode,
    MozCard,
    MozCardBody,
    MozCardHeader,
    MozCardMedia,
    MozCardFooter,
    MozIcon,
  ],
  templateUrl: './card.html',
  styleUrls: ['./card.scss', '../lib-components.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  title = 'card';
  description =
    'Cards are versatile UI components that group related content and actions, providing a structured layout for displaying information in a visually appealing way.';

  public responsive = inject(ResponsiveService);
  screen = computed(() => this.responsive.breakpoint());

  models: MozCardModel[] = ['fill', 'flavor', 'outline', 'glass', 'elevated'];
  models1: MozCardModel[] = ['fill', 'flavor', 'outline'];
  models2: MozCardModel[] = ['glass', 'elevated'];
  colors = ['primary', 'secondary', 'success', 'warn', 'danger'];

  openMap: Record<string, boolean> = {};
  openSource(key: string) {
    this.openMap[key] = !this.openMap[key];
  }
  isOpen(key: string): boolean {
    return !!this.openMap[key];
  }
}
