import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <button [class]="buttonClass">
      {{ label }}
    </button>
  `,
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  @Input() buttonClass: string;
  @Input() label: string;
  
  constructor() {
    this.buttonClass = '';
    this.label = 'Default Label';
   }
}
