import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mozek-api-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="api-table-wrapper" style="overflow-x: auto;">
      <table class="api-table" style="width: 100%; border-collapse: collapse; text-align: left; font-family: monospace;">
        <thead>
          <tr style="border-bottom: 2px solid var(--moz-color-primary);">
            <th style="padding: 10px;">Name</th>
            <th style="padding: 10px;">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of data" style="border-bottom: 1px solid var(--moz-color-border);">
            <td style="padding: 10px; color: var(--moz-color-primary);">
              <strong>@{{item.isOutput ? 'Output' : 'Input'}}()</strong>
              <br/>
              {{item.name}}{{item.optional ? '?' : ''}}: <span style="color: #d63384;">{{item.type}}</span>
            </td>
            <td style="padding: 10px; font-family: sans-serif; font-size: 0.9rem;">
               <span *ngIf="!item.optional" style="background: var(--moz-color-danger-lite); color: var(--moz-color-danger); padding: 2px 6px; border-radius: 4px; font-size: 0.8rem; margin-bottom: 4px; display: inline-block;">Required</span>
               <span *ngIf="item.optional" style="background: var(--moz-color-primary-lite); color: var(--moz-color-primary); padding: 2px 6px; border-radius: 4px; font-size: 0.8rem; margin-bottom: 4px; display: inline-block;">Optional</span>
               <p style="margin: 0; padding-top: 4px;">{{item.description || 'Configures the ' + item.name + ' property.'}}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .api-table th { background: rgba(var(--moz-color-primary-rgb), 0.05); }
    .api-table td { vertical-align: top; }
  `]
})
export class MozekApiTable {
  @Input() data: any[] = [];
}
