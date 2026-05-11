import {
  Component,
  inject,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MozIcon, MozInput } from 'mozek-angular';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { MozekCode } from 'src/app/assets/components/codesample';

type MozInputModel = 'outline' | 'fill';

/**
 * InputComponent
 *
 * A reusable page component to document and display the MozInput library component.
 *
 * @example
 * <moz-input></moz-input>
 */
@Component({
  selector: 'app-lib-component',
  standalone: true,
  imports: [CommonModule, MozekCode, MozIcon, MozInput],
  templateUrl: './input.html',
  styleUrls: ['./input.scss', '../lib-components.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  title = 'input';
  descripition =
    'The Mozek Input component is a versatile form control that allows users to enter and edit text. It supports various input types, including text, password, email, and more. The component is designed with accessibility in mind, providing features such as labels, placeholders, and error messages to enhance the user experience. Additionally, it offers customization options for styling and validation, making it a flexible choice for any form design.';

  public responsive = inject(ResponsiveService);
  screen = computed(() => this.responsive.breakpoint());

  models: MozInputModel[] = ['outline', 'fill'];

  openMap: Record<string, boolean> = {};
  openSource(key: string) {
    this.openMap[key] = !this.openMap[key];
  }
  isOpen(key: string): boolean {
    return !!this.openMap[key];
  }
}
