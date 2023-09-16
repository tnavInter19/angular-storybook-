// src/app/modal/modal.component.ts

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
    <div class="modal-overlay" [class.active]="isOpen" (click)="onCloseModal()">
      <div class="modal">
        <div class="modal-header">
          <h2>{{ title }}</h2>
          <button class="close-button" (click)="onCloseModal()">&times;</button>
        </div>
        <div class="modal-content">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./modal.css']
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Input() title: string = '';
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  onCloseModal() {
    this.close.emit();
  }
}
