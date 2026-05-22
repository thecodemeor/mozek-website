import {
  Component,
  inject,
  computed,
  OnInit,
  HostListener
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ResponsiveService } from 'src/app/services/responsive.service';
import {
  MozIcon,
  MozCard,
  MozCardHeader,
  MozCardBody,
  MozInput,
  MozButton,
  MozSnackbarQueueService,
  MozTooltipDirective
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
    FormsModule,
    MozTooltipDirective
  ],
  templateUrl: './icons.html',
  styleUrl: './icons.scss',
  standalone: true
})
export class Icons implements OnInit {
  public responsive = inject(ResponsiveService);
  public snackbarQueueService = inject(MozSnackbarQueueService);
  screen = computed(() => this.responsive.breakpoint());

  color: string = 'primary'

  showScrollTop = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollTop = window.scrollY > 200;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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

  search: string = '';
  iconsDisplay: any[] = [];

  iconSynonyms: Record<string, string[]> = {
    // Navigation & UI
    'exit': ['logout', 'door', 'leave', 'quit', 'sign out'],
    'login': ['signin', 'sign in', 'enter', 'door'],
    'home': ['house', 'main', 'start', 'dashboard'],
    'menu': ['hamburger', 'list', 'nav', 'navigation', 'options'],
    'menu_dots': ['more', 'options', 'kebab', 'context'],
    'menu_dots_square': ['more', 'options', 'kebab', 'context'],
    'menu_dots_circle': ['more', 'options', 'kebab', 'context'],
    'search': ['find', 'magnify', 'look', 'glass', 'query'],
    'settings': ['gear', 'options', 'preferences', 'config', 'setup'],
    'filter': ['sort', 'funnel', 'refine', 'narrow'],
    'sort': ['order', 'arrange', 'list', 'filter'],

    // Vehicles & Travel
    'bus': ['vehicle', 'transport', 'travel', 'public', 'transit'],
    'train': ['vehicle', 'transport', 'travel', 'railway', 'subway'],
    'luggage': ['travel', 'baggage', 'suitcase', 'trip', 'vacation'],
    'map_pin': ['location', 'place', 'marker', 'destination', 'gps'],
    'compass': ['direction', 'navigate', 'safari', 'explore'],
    'earth': ['world', 'globe', 'planet', 'global', 'international'],
    'global': ['world', 'globe', 'planet', 'earth', 'international'],

    // Documents & Files
    'document_text': ['file', 'paper', 'page', 'note', 'text'],
    'file_text': ['document', 'paper', 'page', 'note'],
    'notebook': ['journal', 'diary', 'book', 'notes', 'pad'],
    'book': ['read', 'novel', 'education', 'learn', 'manual'],
    'clipboard': ['copy', 'paste', 'board', 'list', 'task'],
    'clipboard_text': ['copy', 'paste', 'board', 'list', 'task'],
    'folder_1': ['directory', 'files', 'archive', 'organize'],
    'folder_2': ['directory', 'files', 'archive', 'organize'],
    'folder_open': ['directory', 'files', 'archive', 'open'],
    'archive': ['zip', 'box', 'storage', 'save'],

    // Actions & Tools
    'bin': ['trash', 'delete', 'remove', 'garbage', 'rubbish', 'erase'],
    'pen': ['edit', 'write', 'pencil', 'update', 'draw'],
    'copy': ['duplicate', 'clone', 'files', 'clipboard'],
    'download': ['save', 'get', 'down', 'pull', 'install'],
    'share': ['send', 'distribute', 'forward', 'network'],
    'link': ['chain', 'url', 'attach', 'connect', 'hyperlink'],
    'paperclip': ['attach', 'file', 'link', 'attachment'],
    'bookmark': ['save', 'favorite', 'read later', 'ribbon'],
    'bookmark_square': ['save', 'favorite', 'read later'],
    'star': ['favorite', 'bookmark', 'rate', 'rating', 'achievement'],
    'heart': ['love', 'like', 'favorite', 'health'],
    'bell': ['notification', 'alert', 'alarm', 'ring'],
    'pin': ['attach', 'marker', 'thumbtack', 'save'],

    // Security
    'lock': ['secure', 'safe', 'password', 'private', 'protect'],
    'lock_unlock': ['open', 'public', 'insecure', 'unprotected'],
    'key': ['password', 'secure', 'access', 'unlock', 'auth'],
    'facescan_square': ['security', 'biometric', 'faceid', 'scan'],
    'qrcode': ['scan', 'barcode', 'link', 'mobile'],

    // Users & People
    'user': ['person', 'profile', 'account', 'human', 'avatar'],
    'user_add': ['person', 'profile', 'account', 'human', 'register', 'new'],
    'user_remove': ['person', 'profile', 'account', 'human', 'delete'],
    'user_check': ['person', 'profile', 'account', 'human', 'verified'],
    'user_circle': ['person', 'profile', 'account', 'human', 'avatar'],
    'friend': ['person', 'people', 'user', 'buddy', 'companion'],
    'group': ['people', 'team', 'users', 'community', 'crowd'],
    'id_tag': ['name', 'badge', 'identification', 'profile'],
    'name_tag': ['id', 'badge', 'identification', 'profile'],

    // Communication
    'chat_dots_square': ['message', 'conversation', 'talk', 'sms', 'text'],
    'chat_dots_circle': ['message', 'conversation', 'talk', 'sms', 'text'],
    'chat_line_square': ['message', 'conversation', 'talk', 'sms', 'text'],
    'chat_line_circle': ['message', 'conversation', 'talk', 'sms', 'text'],
    'chit_chat_square': ['message', 'conversation', 'talk', 'forum', 'discuss'],
    'chit_chat_round': ['message', 'conversation', 'talk', 'forum', 'discuss'],
    'phone': ['call', 'mobile', 'cell', 'telephone', 'contact'],
    'letter': ['email', 'mail', 'message', 'envelope', 'post'],
    'reply': ['respond', 'answer', 'return', 'back'],
    'forward': ['send', 'share', 'next'],
    'mention_square': ['at', 'tag', 'user', 'email'],
    'mention_circle': ['at', 'tag', 'user', 'email'],

    // E-commerce & Finance
    'shop': ['store', 'buy', 'market', 'retail'],
    'shopping_bag_1': ['cart', 'buy', 'purchase', 'store', 'checkout'],
    'shopping_bag_2': ['cart', 'buy', 'purchase', 'store', 'checkout'],
    'shopping_bag_check': ['cart', 'buy', 'purchase', 'store', 'checkout', 'done'],
    'cart_1': ['bag', 'buy', 'purchase', 'store', 'checkout', 'trolley'],
    'cart_2': ['bag', 'buy', 'purchase', 'store', 'checkout', 'trolley'],
    'credit_card': ['payment', 'buy', 'money', 'pay', 'checkout'],
    'card_1': ['payment', 'credit', 'debit', 'money'],
    'card_transfer': ['payment', 'send', 'money', 'transaction'],
    'cash_1': ['money', 'payment', 'bill', 'pay', 'currency', 'dollar'],
    'cash_2': ['money', 'payment', 'bill', 'pay', 'currency', 'dollar'],
    'coin': ['money', 'payment', 'pay', 'currency', 'cent'],
    'calculator': ['math', 'finance', 'numbers', 'accounting'],
    'bill': ['invoice', 'receipt', 'payment', 'charge'],
    'bill_list': ['invoice', 'receipt', 'payment', 'history'],
    'bill_check': ['invoice', 'receipt', 'paid', 'success'],
    'bill_error': ['invoice', 'receipt', 'unpaid', 'fail'],
    'percent': ['discount', 'sale', 'offer', 'math', 'fraction'],
    'percent_square': ['discount', 'sale', 'offer', 'math'],
    'charity': ['donate', 'give', 'heart', 'care', 'support'],

    // Feedback & Status
    'check': ['success', 'done', 'tick', 'complete', 'ok', 'yes', 'correct'],
    'check_circle': ['success', 'done', 'tick', 'complete', 'ok', 'yes'],
    'check_square': ['success', 'done', 'tick', 'complete', 'ok', 'yes'],
    'check_read': ['success', 'done', 'tick', 'seen', 'double'],
    'checklist': ['tasks', 'todo', 'list', 'done'],
    'close': ['cancel', 'remove', 'delete', 'x', 'no', 'error'],
    'close_circle': ['cancel', 'remove', 'delete', 'x', 'no', 'error'],
    'close_square': ['cancel', 'remove', 'delete', 'x', 'no', 'error'],
    'danger_circle': ['warning', 'error', 'alert', 'important', 'caution'],
    'danger_triangle': ['warning', 'error', 'alert', 'important', 'caution'],
    'info_circle': ['help', 'details', 'about', 'information'],
    'info_square': ['help', 'details', 'about', 'information'],
    'question_circle': ['help', 'support', 'ask', 'unknown', 'faq'],
    'question_square': ['help', 'support', 'ask', 'unknown', 'faq'],
    'forbidden_circle': ['stop', 'block', 'ban', 'not allowed'],
    'add': ['plus', 'new', 'create', 'insert'],
    'add_circle': ['plus', 'new', 'create', 'insert'],
    'add_square': ['plus', 'new', 'create', 'insert'],
    'minus': ['remove', 'delete', 'subtract', 'less', '-'],
    'minus_circle': ['remove', 'delete', 'subtract', 'less'],
    'minus_square': ['remove', 'delete', 'subtract', 'less'],

    // Media & Devices
    'eye_opened': ['view', 'see', 'watch', 'visible', 'show', 'vision'],
    'eye_closed': ['hide', 'invisible', 'blind', 'password', 'hidden'],
    'picture': ['image', 'photo', 'gallery', 'photo'],
    'gallery': ['image', 'photo', 'picture', 'album'],
    'gallery_add': ['image', 'photo', 'picture', 'upload'],
    'microphone': ['audio', 'sound', 'record', 'voice', 'podcast'],
    'headphones': ['audio', 'sound', 'listen', 'music', 'headset'],
    'play': ['start', 'video', 'media', 'audio', 'movie'],
    'printer': ['print', 'paper', 'hardware', 'office'],
    'monitor': ['screen', 'display', 'computer', 'desktop', 'pc'],
    'display': ['screen', 'monitor', 'tv', 'presentation'],
    'cpu': ['processor', 'chip', 'hardware', 'computer', 'tech'],
    'mouse': ['click', 'hardware', 'computer', 'cursor'],
    'game_controller': ['play', 'console', 'entertainment', 'gaming'],

    // Power & Energy
    'battery': ['power', 'charge', 'energy'],
    'battery_full': ['power', 'charge', 'energy', '100%'],
    'battery_low': ['power', 'charge', 'energy', 'empty'],
    'battery_charging': ['power', 'charge', 'energy', 'plug'],
    'bolt': ['power', 'energy', 'electric', 'lightning', 'flash', 'fast'],
    'bolt_cirlce': ['power', 'energy', 'electric', 'lightning', 'flash'],
    'power_button': ['on', 'off', 'start', 'switch'],
    'plug': ['power', 'connect', 'electric', 'cable'],
    'gas_station': ['fuel', 'petrol', 'car', 'energy'],
    'power_station': ['energy', 'factory', 'electric', 'plant'],

    // Charts & Analytics
    'chart_bar_1': ['graph', 'statistics', 'analytics', 'data', 'metrics'],
    'chart_bar_2': ['graph', 'statistics', 'analytics', 'data', 'metrics'],
    'chart_pie': ['graph', 'statistics', 'analytics', 'data', 'portion'],
    'chart_grow': ['increase', 'up', 'trend', 'profit', 'rise'],
    'chart_decline': ['decrease', 'down', 'trend', 'loss', 'fall'],
    'speedometer': ['dashboard', 'fast', 'performance', 'metrics', 'speed'],

    // Time & Calendar
    'calendar': ['date', 'time', 'schedule', 'event', 'month', 'day'],
    'clock': ['time', 'watch', 'hour', 'minute'],
    'history': ['time', 'past', 'recent', 'clock', 'rewind'],
    'stopwatch': ['time', 'timer', 'race', 'clock'],
    'stopwatch_start': ['time', 'timer', 'race', 'clock', 'begin'],
    'alarm': ['time', 'wake', 'clock', 'alert'],
    'hourglass': ['time', 'wait', 'loading', 'sand'],

    // Emoticons
    'smile_circle': ['happy', 'face', 'emotion', 'good', 'joy'],
    'smile_square': ['happy', 'face', 'emotion', 'good', 'joy'],
    'sad_circle': ['unhappy', 'face', 'emotion', 'bad', 'cry'],
    'sad_square': ['unhappy', 'face', 'emotion', 'bad', 'cry'],
    'expressionless_square': ['neutral', 'face', 'emotion', 'bored'],

    // Weather & Nature
    'sun': ['light', 'day', 'brightness', 'weather', 'morning'],
    'moon': ['dark', 'night', 'theme', 'weather', 'sleep'],
    'fire': ['hot', 'flame', 'burn', 'trend', 'popular'],
    'atom': ['science', 'react', 'physics', 'core'],

    // Arrows & Directions (Broad groupings)
    'arrow_up': ['direction', 'point', 'top', 'north'],
    'arrow_down': ['direction', 'point', 'bottom', 'south'],
    'arrow_left': ['direction', 'point', 'back', 'west', 'previous'],
    'arrow_right': ['direction', 'point', 'forward', 'east', 'next'],
    'undo': ['back', 'return', 'reverse', 'left'],
    'redo': ['forward', 'repeat', 'right'],
    'arrow_chevron_up': ['direction', 'point', 'top', 'expand'],
    'arrow_chevron_down': ['direction', 'point', 'bottom', 'collapse'],
    'arrow_chevron_left': ['direction', 'point', 'back', 'previous'],
    'arrow_chevron_right': ['direction', 'point', 'forward', 'next'],

    // Office & Misc
    'box': ['package', 'parcel', 'shipping', 'container'],
    'case_1': ['briefcase', 'work', 'business', 'office', 'portfolio'],
    'case_2': ['briefcase', 'work', 'business', 'office', 'portfolio'],
    'building': ['office', 'company', 'work', 'city', 'apartment'],
    'crown': ['king', 'premium', 'royal', 'pro', 'vip'],
    'code': ['programming', 'developer', 'html', 'brackets'],
    'code_scan': ['programming', 'developer', 'scan', 'qr'],
    'cup_1': ['coffee', 'tea', 'drink', 'mug', 'break'],
    'cup_2': ['coffee', 'tea', 'drink', 'mug', 'break'],
    'tea_cup': ['coffee', 'drink', 'mug', 'break'],
    'pallete': ['color', 'art', 'design', 'paint', 'theme'],
    'layers': ['stack', 'design', 'level', 'arrange'],
    'mortarboard': ['education', 'school', 'university', 'student', 'degree'],
  };

  filter(value?: string) {
    const input = this.search.toLowerCase().trim();
    this.iconsDisplay = [];

    if (!this.search.length) {
      this.iconsDisplay = this.icons;
      return;
    }

    for (const icon of this.icons) {
      const iconlabel = this.labelString(icon).toLowerCase();
      const synonyms = this.iconSynonyms[icon] || [];

      const matchesLabel = iconlabel.includes(input);
      const matchesSynonym = synonyms.some(synonym => synonym.toLowerCase().includes(input));

      if (matchesLabel || matchesSynonym) {
        this.iconsDisplay.push(icon);
      }
    }
  }

  copy(text: string) {
    navigator.clipboard.writeText(text)
      .then(() => {
        this.snackbarQueueService.show(`Copied "${text}" to clipboard`, 'success');
      })
      .catch(err => {
        this.snackbarQueueService.show('Failed to copy to clipboard', 'error');
        console.error('Copy failed', err);
      });
  }


  icons = [
    'add', 'minus', 'close', 'check',
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
    'power_button', 'cpu', 'monitor', 'display', 'mouse', 'headphones',
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