import {
    Component,
    inject,
    computed
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MozIcon, MozCurrency } from 'mozek-angular';

import { ResponsiveService } from 'src/app/services/responsive.service';
import { MozekCode } from "src/app/assets/components/codesample";

@Component({
    selector: 'app-lib-component',
    imports: [
    CommonModule,
    MozIcon,
    MozekCode,
    MozCurrency
],
    templateUrl: './currency.html',
    styleUrls: ['./currency.scss', '../lib-components.scss'],
})
export class Currency {
    title = 'currency'
    description = 'The currency component is designed to display monetary values in a clear and consistent format. It supports various currencies, allowing users to easily identify the type of currency being represented. The component can display both the currency symbol and code, along with properly formatted numbers, making it ideal for financial applications, e-commerce platforms, and any interface that requires the presentation of monetary information.'
    
    public responsive = inject(ResponsiveService);
    screen = computed(() => this.responsive.breakpoint());

    symbolsCurrency: any = {
        USD: '$',
        EUR: '€',
        GBP: '£',
        JPY: '¥',
        CNY: '¥',
        KRW: '₩',
        INR: '₹',
        MYR: 'RM',
        SGD: 'S$',
        IDR: 'Rp',
        PHP: '₱',
        THB: '฿',
        VND: '₫',
        AUD: 'A$',
        NZD: 'NZ$',
        CAD: 'C$',
        CHF: 'Fr',
        SEK: 'kr',
        NOK: 'kr',
        DKK: 'kr',
        PLN: 'zł',
        RUB: '₽',
        ZAR: 'R',
        NGN: '₦',
        AED: 'د.إ',
        SAR: 'ر.س',
        KWD: 'د.ك',
        BHD: '.د.ب',
        OMR: 'ر.ع',
        PKR: 'Rs',
        LKR: 'Rs',
        BDT: '৳',
        HKD: 'HK$',
        TWD: 'NT$'
    };
    symbolsCurrencyArray = Object.entries(this.symbolsCurrency).map(
        ([code, symbol]) => ({
            code,
            symbol
        })
    );

    openMap: Record<string, boolean> = {};
    openSource(key: string) {
        this.openMap[key] = !this.openMap[key];
    }
    isOpen(key: string): boolean {
        return !!this.openMap[key];
    }
}