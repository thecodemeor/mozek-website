import {
  Component,
  inject,
  computed,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ResponsiveService } from 'src/app/services/responsive.service';
import {
  MozIcon,
  MozCard,
  MozCardHeader,
  MozCardBody,
  MozInput,
  MozButton
} from 'mozek-angular';

@Component({
  selector: 'app-icons',
  imports: [
    MozIcon,
    MozCard,
    MozCardHeader,
    MozCardBody,
    MozInput,
    MozButton,
    FormsModule
  ],
  templateUrl: './icons.html',
  styleUrl: './icons.scss',
  standalone: true
})
export class Icons implements OnInit {
  public responsive = inject(ResponsiveService);
  screen = computed(() => this.responsive.breakpoint());

  color: string = 'primary'
  ngOnInit(): void {
    this.filter()
  }

  pickColor(colorpick: string) {
    this.color = colorpick
  }

  get mainColor(): string {
    if (this.isHexColor(this.color)) {
      return this.color as string;
    } else {
      switch (this.color) {
        case 'primary': return 'var(--moz-color-primary)';
        case 'secondary': return 'var(--moz-color-secondary)';
        case 'success': return 'var(--moz-color-success)';
        case 'warn': return 'var(--moz-color-warning)';
        case 'danger': return 'var(--moz-color-danger)';
      }
    }
    return 'var(--moz-color-primary)'
  }

  colorbutton(color: string) {
    switch (color) {
      case 'primary': return 'var(--moz-color-primary)';
      case 'secondary': return 'var(--moz-color-secondary)';
      case 'success': return 'var(--moz-color-success)';
      case 'warn': return 'var(--moz-color-warning)';
      case 'danger': return 'var(--moz-color-danger)';
    }
    return 'var(--moz-color-primary)'
  }

  isHexColor(value: any) {
    if (typeof value !== 'string') return false;
    return /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(value.trim());
  }

  labelString(label: string) {
    return label.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }

  search: string = ''
  iconsDisplay: any[] = []
  filter(value?: string) {
    const input = this.search.toLowerCase().trim();
    this.iconsDisplay = []
    for (const icon of this.icons) {
      const iconlabel = this.labelString(icon).toLowerCase()
      if (!this.search.length) {
        this.iconsDisplay = this.icons
      } else if (iconlabel.includes(input)) {
        this.iconsDisplay.push(icon)
      }
    }
  }

  tooltip: string = ''
  copy(text: string) {
    navigator.clipboard.writeText(text)
    .then(() => {
      this.tooltip = text
      setTimeout(() => {
        this.tooltip = ''
      }, 2000);
    })
    .catch(err => {
      console.error('Copy failed', err);
    });
  }

  tipOpen: string = '';
  placement: 'top' | 'topleft' = 'top';

  showTip(item: string, el: HTMLElement) {
    this.tipOpen = item;
    if (this.tipOpen !== 'danger') {
      this.placement = 'top';
    } else {
      this.placement = 'topleft';
    }
  }

  hideTip() {
    this.tipOpen = '';
  }

  icons = [
    'bus', 'building', 'box', 'bookmark', 'bookmark_square',
    'book', 'bell', 'backspace', 'backpack',
    'atom', 'archive', 'crown', 'copy', 'compass', 'code',
    'code_scan', 'clipboard', 'clipboard_text', 'case_1', 'case_2',
    'filter', 'file_text', 'facescan_square', 'expressionless_square',
    'exit', 'earth', 'download', 'document_text', 'cup_1', 'cup_2',
    'home', 'heart', 'menu', 'global', 'gallery', 'gallery_add',
    'folder_1', 'folder_2', 'folder_open', 'fire', 'key', 'moon',
    'microphone', 'map_pin', 'search', 'login', 'lock', 'lock_unlock',
    'link', 'lightbulb', 'letter', 'layers', 'qrcode', 'play', 'name_tag',
    'pin', 'pen', 'paperclip', 'bin', 'pallete', 'notebook', 'phone',
    'train', 'tea_cup', 'sun', 'luggage', 'sticker_square',
    'sticker_circle', 'star', 'mortarboard', 'share', 'settings',
    'arrow_up', 'arrow_down', 'arrow_left', 'arrow_right',
    'arrow_chevron_up', 'arrow_chevron_down', 'arrow_chevron_left',
    'arrow_chevron_right', 'arrow_alt_up', 'arrow_alt_down',
    'arrow_alt_left', 'arrow_alt_right', 'arrow_circle_up',
    'arrow_circle_down', 'arrow_circle_left', 'arrow_circle_right',
    'arrow_chevron_circle_up', 'arrow_chevron_circle_down',
    'arrow_chevron_circle_left', 'arrow_chevron_circle_right',
    'arrow_square_up', 'arrow_square_down', 'arrow_square_left',
    'arrow_square_right', 'arrow_chevron_square_up',
    'arrow_chevron_square_down', 'arrow_chevron_square_left',
    'arrow_chevron_square_right', 'undo', 'redo', 'undo_square',
    'redo_square', 'reply', 'forward', 'add_square', 'add_circle',
    'minus_square', 'minus_circle', 'close_square', 'close_circle',
    'question_square', 'question_circle', 'info_square', 'info_circle',
    'danger_circle', 'danger_triangle', 'check_square', 'check_circle',
    'check_read', 'smile_square', 'smile_circle', 'sad_square',
    'sad_circle', 'sort', 'eye_opened', 'eye_closed', 'menu_dots',
    'menu_dots_square', 'menu_dots_circle', 'mention_square',
    'mention_circle', 'forbidden_circle', 'chat_dots_square',
    'chat_dots_circle', 'chat_line_square', 'chat_line_circle',
    'chit_chat_square', 'chit_chat_round', 'checklist', 'battery',
    'battery_full', 'battery_low', 'battery_charging', 'bolt',
    'bolt_cirlce', 'gas_station', 'power_station', 'plug',
    'power_button', 'cpu', 'mozitor', 'display', 'mouse', 'headphones',
    'game_controller', 'printer', 'speedometer', 'shop', 'charity',
    'credit_card', 'card_1', 'card_transfer', 'cash_1', 'cash_2',
    'coin', 'calculator', 'cart_1', 'cart_2', 'bill', 'bill_list',
    'bill_check', 'bill_error', 'shopping_bag_1', 'shopping_bag_2',
    'shopping_bag_check', 'percent', 'percent_square', 'user', 'user_add',
    'user_remove', 'user_check', 'user_circle', 'id_tag', 'friend',
    'group', 'chart_bar_1', 'chart_pie', 'chart_bar_2', 'chart_grow',
    'chart_decline', 'clock', 'stopwatch', 'stopwatch_start', 'alarm',
    'history', 'calendar', 'hourglass'
  ]
}