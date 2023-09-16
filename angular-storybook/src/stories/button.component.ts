import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-button',
  imports: [CommonModule],
  template: ` <button
    type="button"
    (click)="onClick.emit($event)"
    class="font-semibold rounded-full cursor-pointer inline-block {{ sizeClasses }} {{ modeClasses }}"
    [style.background-color]="backgroundColor"
  >
    {{ label }}
  </button>`,
})
export default class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get sizeClasses(): string {
   if (this.size === 'small') {
     return 'text-sm px-4 py-2';
   } else if (this.size === 'large') {
     return 'text-lg px-6 py-3';
   }
   // Default to medium
   return 'text-base px-5 py-3';
 }

 public get modeClasses(): string {
   return this.primary ? 'bg-blue-500 text-white' : 'bg-transparent text-gray-600 shadow-md';
 }
}
