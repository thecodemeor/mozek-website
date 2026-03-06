import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
    selector: 'mozek-code',
    standalone: true,
    template: `
        <span class="tag"><span class="symbol">&lt;</span>{{ tag }}</span>
            @if(checkbox.length) { <span class="blue"> [(checked)]</span>=<span class="orange">"{{ checkbox }}"</span>}
            @if(img.length) { <span class="blue"> src</span>=<span class="orange">"{{ img }}"</span>}
            @if(model.length) { <span class="blue"> model</span>=<span class="orange">"{{ model }}"</span>}
            @if(color.length) { <span class="blue"> color</span>=<span class="orange">"{{ color }}"</span>}
            @if(icon.length) { <span class="blue"> icon</span>=<span class="orange">"{{ icon }}"</span>}
            @if(position.length) { <span class="blue"> position</span>=<span class="orange">"{{ position }}"</span>}
            @if(currency.length) { <span class="blue"> currency</span>=<span class="orange">"{{ currency }}"</span>}
            @if(depth.length) { <span class="blue"> depth</span>=<span class="orange">"{{ depth }}"</span>}
            @if(align.length) { <span class="blue"> align</span>=<span class="orange">"{{ align }}"</span>}
            @if(value.length) { <span class="blue"> value</span>=<span class="orange">"{{ value }}"</span>}
            @if(dateValue.length) { <span class="blue"> [(value)]</span>=<span class="orange">"{{ dateValue }}"</span>}
            @if(label.length) { <span class="blue"> label</span>=<span class="orange">"{{ label }}"</span>}
            @if(placeholder.length) { <span class="blue"> placeholder</span>=<span class="orange">"{{ placeholder }}"</span>}
            @if(helper.length) { <span class="blue"> helper</span>=<span class="orange">"{{ helper }}"</span>}
            @if(error.length) { <span class="blue"> error</span>=<span class="orange">"{{ error }}"</span>}
            @if(type.length) { <span class="blue"> type</span>=<span class="orange">"{{ type }}"</span>}
            @if(size.length) { <span class="blue"> size</span>=<span class="orange">"{{ size }}"</span>}
            @if(speed.length) { <span class="blue"> speed</span>=<span class="orange">"{{ speed }}"</span>}
            @if(orientation.length) { <span class="blue"> orientation</span>=<span class="orange">"{{ orientation }}"</span>}

            @if(radioCheck.length) { <span class="blue"> [checked]</span>=<span class="orange">"<span class="blue">{{ topic }}</span><span class="white"> === </span>{{ result }}"</span>}
            @if(multi) { <span class="blue"> [multi]</span>=<span class="orange">"true"</span>}
            @if(extra.length) { <span class="blue"> {{ extra }}</span>}
        <span class="symbol">&gt;</span>
            <div [class.pl-4]="!inline" [style.display]="inline === true ? 'inline' : ''">
                <ng-content></ng-content>
            </div>
        @if(tag !== 'img') {
            <span class="tag"><span class="symbol">&lt;/</span>{{tag}}<span class="symbol">&gt;</span></span>
        }
    `,
    styles: `
        .symbol { color: #808080;}
        .tag { color: #569dd6;}
        .orange { color: #ce9178;}
        .blue { color: #9bdbfe;}
        .white { color: #ffffff;}
    `
})
export class MozekCode {
    @Input() tag = ''
    @Input() model = '';
    @Input() color = '';
    @Input() icon = '';
    @Input() currency = '';
    @Input() depth = '';
    @Input() value = '';
    @Input() dateValue = '';
    @Input() label = '';
    @Input() align = '';
    @Input() img = '';
    @Input() extra = ''
    @Input() position = ''
    @Input() placeholder = ''
    @Input() helper = ''
    @Input() error = ''
    @Input() type = ''
    @Input() size = ''
    @Input() speed = ''
    @Input() checkbox = '';
    @Input() orientation = ''
    @Input() radioCheck = ''
    @Input({ transform: booleanAttribute }) multi = false;
    @Input({ transform: booleanAttribute }) inline = false;

    
        topic: string = '';
        result: string = '';
    ngOnInit() {
        const [topic, result] = this.radioCheck.split(',').map(s => s.trim());
        this.topic = topic;
        this.result = result;
    }
}