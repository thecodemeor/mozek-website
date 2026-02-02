import {
  Component,
  inject,
  computed
} from '@angular/core';
import { FormsModule } from "@angular/forms";

import { ResponsiveService } from 'src/app/services/responsive.service';
import { MozCard } from 'mozek-angular';

@Component({
  selector: 'app-lib-utilities',
  standalone: true,
  imports: [
    MozCard,
    FormsModule
],
  templateUrl: './lib-utilities.html',
  styleUrl: './lib-utilities.scss',
})
export class LibUtilities {
  public responsive = inject(ResponsiveService);
  screen = computed(() => this.responsive.breakpoint());

  values = [ '0 rem','0.5 rem','1 rem','1.5 rem','2 rem','2.5 rem','3 rem','3.5 rem','4 rem','4.5 rem','5 rem']

  directions = [
    {label: '', prefix: ''},
    {label: 'Top', prefix: 't'},
    {label: 'Bottom', prefix: 'b'},
    {label: 'Left', prefix: 'l'},
    {label: 'Right', prefix: 'r'},
    {label: 'Top & Bottom', prefix: 'y'},
    {label: 'Left & Right', prefix: 'x'},
  ]

  spacingStyleInput: string = ''
  positionStyleInput: string = ''
  textingStyleInput: string = ''
  allowedInputCodes: string[] = []
  classInputDemo(type: string) {
    console.log(
      this.spacingStyleInput, 
      this.positionStyleInput,
      this.textingStyleInput
    )
    let allowedInputCodes = [];
    switch (type) {
      case 'spacing': return this.spacingStyleInput;
      case 'position': return this.positionStyleInput;
      case 'text': return this.textingStyleInput;
    }
    return
  }

  flexbox = [
    {label: 'Display : Flex', code: 'flex'},
    {label: 'Flex Direction : Column', code: 'flex-col'},
    {label: 'Flex Direction : Row', code: 'flex-row'},
    {label: 'Flex Wrap : Wrap', code: 'flex-wrap'},
    {label: 'Justify Content : Center', code: 'justify-center'},
    {label: 'Justify Content : Start', code: 'justify-start'},
    {label: 'Justify Content : End', code: 'justify-end'},
    {label: 'Justify Content : Space Between', code: 'justify-betweem'},
    {label: 'Justify Content : Space Evenly', code: 'justify-evenly'},
    {label: 'Align Items : Center', code: 'items-center'},
    {label: 'Align Items : Start', code: 'items-start'},
    {label: 'Align Items : End', code: 'items-end'},
    {label: 'Flex : 1 1 0', code: 'spacer'},
  ]

  positioning = [
    {label: 'Position : Absolute', code: 'absolute'},
    {label: 'Top : 0', code: 't-0'},
    {label: 'Bottom : 0', code: 'b-0'},
    {label: 'Left : 0', code: 'l-0'},
    {label: 'Right : 0', code: 'r-0'},
    {label: 'Z Index : 0', code: 'z-0'},
    {label: 'Z Index : 10', code: 'z-10'},
    {label: 'Z Index : 20', code: 'z-20'},
    {label: 'Z Index : 30', code: 'z-30'},
    {label: 'Z Index : 40', code: 'z-40'},
    {label: 'Z Index : 50', code: 'z-50'},
    {label: 'Z Index : 60', code: 'z-60'},
    {label: 'Z Index : 70', code: 'z-70'},
    {label: 'Z Index : 80', code: 'z-80'},
    {label: 'Z Index : 90', code: 'z-90'},
    {label: 'Z Index : 100', code: 'z-100'},
  ]

  sampleCardWidth(index: number) {
    const w = 70 - (index * 60 / 10);
    return `${w}%`
  }

  sampleZindex(index: number) {
    const z = index * 10;
    return `${z}`
  }

  texts = [
    {label: 'Text Align : Center', code: 'text-center'},
    {label: 'Text Align : Left', code: 'text-left'},
    {label: 'Text Align : Right', code: 'text-right'},
    {label: 'Text Transform : Uppercase', code: 'text-uppercase'},
    {label: 'Text Transform : Capitalize', code: 'text-capitalize'},
    {label: 'White Space : No Wrap', code: 'text-oneline'},
    {label: 'Text Overflow : Ellipsis', code: 'text-ellipsis'},
    {label: 'Font Color : Primary Color', code: 'primary'},
  ]

  textWordingCustom = ''
  textWording() {
    if (this.textWordingCustom.trim() === '') {
      return 'The Mozek'
    }
    return this.textWordingCustom
  }

  fontSizes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  defaultSizes = ['p', 'dl', 'li', 'figure', 'blockquote', 'a', 'text']

  sampleFontSize(prefix: string) {
    return `<${prefix}>Aa</${prefix}>`
  }
}
